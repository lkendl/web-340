/*
============================================
; Title: Exercise 5.2
; File Name: Kendl-exercise-5.2.js
; Author: Professor Krasso 
; Date: 2 February 2022
; Modified By: Laura Kendl
; Description: Demonstrates how to use EJS templates.
; Resources:
; Blackboard: Code provided by Professor Krasso in WEB340 Exercise 5.2 Outline
===========================================
*/

// Require JavaScript libraries.
var express = require("express");
var http = require("http");
var path = require("path"); // Helps find the directory where the views will be saved.

// Create Express application.
var app = express();

// Specify 'views' folder to resolve EJS templates.
app.set("views", path.resolve(__dirname, "views"));

// Tell JavaScript to use EJS as its view engine.
app.set("view engine", "ejs");

// Local composer array
var dunderMifflin = [
    "Bratton",
    "Palmer",
    "Kapoor",
    "Howard"
];

// This GET request returns a text message when rendering index page.
app.get("/", function (request, response) {
       
    response.render("index", {
       
        names: dunderMifflin
   
    });
});

// Start the server.
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});
