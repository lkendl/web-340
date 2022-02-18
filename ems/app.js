/*
============================================
; Title: Assignment 5.4 & 7.4
; File Name: app.js
; Author: Professor Krasso 
; Date: 3 February 2022
; Modified By: Laura Kendl
; Description: Demonstrates how to build EJS templates.
; Resources:
; Blackboard: Code provided by Professor Krasso in WEB340 Assignment 5.4 & 7.4 Outline
===========================================
*/

// Require JavaScript libraries.
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

// Requires for Mongoose.
var mongoose = require("mongoose");
var Employee = require("./models/employee");

// mLab connection.
var mongoDB = "mongodb+srv://lkendl:admin@buwebdev-cluster-1.p8egd.mongodb.net/ems?retryWrites=true&w=majority";

// Mongoose connection to MongoDB.
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", function() {
    console.log("Application connected to mLab MongoDB instance");
});

// Create Express application.
var app = express();

// Static files.
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/img", express.static(__dirname + "public/img"));

// Tell JavaScript to use EJS as its view engine.
app.set("view engine", "ejs");

// Specify 'views' folder to resolve EJS templates.
app.set("views", path.resolve(__dirname, "views"));

// Specify JS to use Morgan logger.
app.use(logger("short"));

// Define routes.
app.get("/", function (request, response) {
    response.render("index", {title: "WEB-340 | EMS"});
});

app.get("/new", function (request, response) {
    response.render("new", {title: "EMS | Data Entry"});
});

app.get("/list", function (request, response) {
    response.render("list", {title: "EMS | Employee Records (Read-only)"});
});

// Start the server.
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});
