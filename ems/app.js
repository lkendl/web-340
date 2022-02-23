/*
============================================
; Title: app.js
; Author: Professor Krasso 
; Date: 21 February 2022
; Modified By: Laura Kendl
; Description: Demonstrates how to build EJS templates.
; Resources:
; Blackboard: Code provided by Professor Krasso in WEB340 Assignment Outlines
===========================================
*/

// Require JavaScript libraries.
const express = require("express");
const http = require("http");
const path = require("path");
const logger = require("morgan");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const csrf = require("csurf");

// Set up csrf protection.
const csrfProtection = csrf({cookie: true});

// Requires for Mongoose.
const mongoose = require("mongoose");

// mLab connection.
const mongoDB = "mongodb+srv://lkendl:admin@buwebdev-cluster-1.p8egd.mongodb.net/ems?retryWrites=true&w=majority";

// Mongoose connection to MongoDB.
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", function() {
    console.log("Application connected to mLab MongoDB instance");
});

// Create Express application.
let app = express();

// Import Employee model.
let Employee = require("./models/employee");

// Define static files.
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/img", express.static(__dirname + "public/img"));

// Define use statements.
app.use(logger("short"));

app.use(helmet.xssFilter());

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(csrfProtection);
app.use(function(request, response, next) {
    var token = request.csrfToken();
    response.cookie("XSRF-TOKEN", token);
    response.locals.csrfToken =  token;
    next();
});

// Define set statements.
app.set("view engine", "ejs"); // Tells JavaScript to use EJS as its view engine.
app.set("views", path.resolve(__dirname, "views")); // Specifies 'views' folder to resolve EJS templates.

// Define routes.
app.get("/", function (request, response) {
    response.render("index", {
        title: "WEB-340 | EMS",
        message: "XSS Prevention Example"
    });
});

app.get("/new", function (request, response) {
    response.render("new", {title: "EMS | Data Entry"});
});

app.get("/list", function (request, response) {
    response.render("list", {title: "EMS | Employee Records (Read-only)"});
});

// Post statement for Mongoose save.
app.post("/process", function(request, response) {
    /* Code for Exercise 8.3.
    console.log(request.body.txtName);
    response.redirect("/");
    */
    if (!request.body.txtFirstName) {
        response.status(400).send("Entries must have a first name");

        return;
    }

    if (!request.body.txtLastName) {
        response.status(400).send("Entries must have a last name");

        return;
    }

    // Get the request's form data.
    let employeeFirstName = request.body.txtFirstName;
    console.log(employeeFirstName);
    let employeeLastName = request.body.txtLastName;
    console.log(employeeLastName);

    // Create an employee model.
    let employee = new Employee({
        firstName: employeeFirstName,
        lastName: employeeLastName
    });

    // Save.
    employee.save(function (error) {
        if (error) throw error;
        console.log(employeeFirstName + " " + employeeLastName + " saved successfully!");
    });

    response.redirect("/");    

});

// Get statement for Mongoose find all [Ref A]. 
app.get("/list", function(request, response) {
    Employee.find({}, function(error, employees) {
        if (error) throw error;
     
        response.render("list", {
            title: "Employee List",
            employees: employees
        });
    });
});

// Create and start the Node server.
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});
