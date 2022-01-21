/*
============================================
; Title: Exercise 3.3
; File Name: Kendl-exercise-3.3.js
; Author: Professor Krasso
; Date: 20 January 2022
; Modified By: Laura Kendl
; Description: Demonstrates how to use advanced routing with
; JavaScript applications.
; Resources:
; Blackboard: Code provided by Professor Krasso in WEB340 Exercise 3.3 Outline
===========================================
*/

//Require JavaScript libraries.
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

//Call the Express function to start a new Express application.
var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

app.use(logger("short"));

// Notify view engine that we will receive a request within the params of the URL.
app.get("/:employeeId", function(request, response) {
// Assign local variable to the params value.
    var employeeId = parseInt(request.params.employeeId, 10);
    response.render("index", {
        employeeId: employeeId
    });
});

http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080");
});