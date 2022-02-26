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
const mongoose = require("mongoose");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const csrf = require("csurf");
const Employee = require("./models/employee"); // Imports Employee model.


/* 
  ----- DATABASE -----
*/
// mLab database connection.
const mongoDB = "mongodb+srv://lkendl:admin@buwebdev-cluster-1.p8egd.mongodb.net/ems?retryWrites=true&w=majority";

mongoose.connect(mongoDB); // Connects to MongoDB through above URL.

mongoose.Promise = global.Promise; 

var db = mongoose.connection; // Sets connection to the variable 'db'.

db.on("error", console.error.bind(console, "MongoDB connection error: ")); // Specifies error message in case of error.

db.once("open", function() {
    console.log("Application connected to mLab MongoDB instance");
}); // Executes success message if connection is successful.


/* 
  ----- SECURITY -----
*/
// Set up csrf protection.
const csrfProtection = csrf({cookie: true});

// Create Express application.
let app = express();

/* 
  ----- STATIC ROUTES -----
*/
// Define static files.
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/img", express.static(__dirname + "public/img"));


/* 
  ----- MIDDLEWARE -----
*/
// App 'use' Morgan logger. 
app.use(logger("short"));

// App 'use' Helmet for XSS prevention. 
app.use(helmet.xssFilter());

app.use(bodyParser.urlencoded({
    extended: true
})
);
app.use(cookieParser());
app.use(csrfProtection);
app.use(function (request, response, next) {
    var token = request.csrfToken();
    response.cookie("XSRF-TOKEN", token);
    response.locals.csrfToken =  token;
    next();
});

/* 
  ----- EJS SPECIFICATION -----
*/
// Define set statements.
app.set("view engine", "ejs"); // Tells JavaScript to use EJS as its view engine.
app.set("views", path.resolve(__dirname, "views")); // Specifies 'views' folder to resolve EJS templates.

/* 
  ----- ROUTES -----
*/
app.get("/", function (request, response) {
    response.render("index", {
        title: "WEB-340 | EMS",
        message: "XSS Prevention Example"
    });
});

app.get("/new", function (request, response) {
    response.render("new", {
        title: "EMS | Data Entry"
    });
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

// Post statement for Mongoose save.
app.post("/process", function(request, response) {
    /* Code for Exercise 8.3.
    console.log(request.body.txtName);
    response.redirect("/");
    */
    if (!request.body.txtFirstName || !request.body.txtLastName) {
        response.status(400).send("Entries must have a first and last name");

        return;
    }

    // Get the request's form data.
    let employeesFirstName = request.body.txtFirstName;
    console.log(employeesFirstName);
    let employeesLastName = request.body.txtLastName;
    console.log(employeesLastName);

    // Create an employee model.
    let employees = new Employee({
        firstName: employeesFirstName,
        lastName: employeesLastName
    });

    // Save.
    employees.save(function (error) {
        if (error) throw error;
        console.log(employeesFirstName + " " + employeesLastName + " saved successfully!");
    });

    response.redirect("/");    

});

// Create and start the Node server.
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});
