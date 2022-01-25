/*
============================================
; Title: Exercise 4.2
; File Name: Kendl-exercise-4.2.js
; Author: Professor Krasso
; Date: 25 January 2022
; Modified By: Laura Kendl
; Description: Demonstrates how to return JSON data to a client.
; Resources:
; Blackboard: Code provided by Professor Krasso in WEB340 Exercise 4.2 Outline
===========================================
*/

// Require JavaScript libraries.
var express = require("express");
var http = require("http");
var logger = require("morgan"); // (OPT.)

// Create Express application.
var app = express();

// Implement logger to view output in console window (OPT.).
app.use(logger("dev"));

// This GET request parses customer ID and returns JSON data to the client.
app.get("/customer/:id", function (request, response) {
   
    var id = parseInt(request.params.id, 10);
    
    response.json({
       
        firstName: "Toby",
        lastName: "Flenderson",
        jobTitle: "HR Rep",
        employeeId: id
   
    });
});

// Start the server.
http.createServer(app).listen(8080, function() {
    console.log("Application started and listening on port 8080");
});
