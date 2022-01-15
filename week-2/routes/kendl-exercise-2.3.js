/*
============================================
; Title: Exercise 2.3
; File Name: kendl-exercise-2.3.js
; Author: Professor Krasso
; Date: 14 January 2022
; Modified By: Laura Kendl
; Description: Demonstrates how to map routes when
; building a Node application.
; Resources:
; Code provided by Professor Krasso in WEB340 Exercise 2.3 Outline (Blackboard)
===========================================
*/

//Require the Express library.
var express = require("express");
//Require the http library to start the server.
var http = require("http");

//Call the Express function to start a new Express application.
var app = express();

//Define the route interceptors to catch URL messages and respond with the appropriate messages to the user.
app.get("/", function(request, response){
    response.end("Welcome to the homepage!");
});

app.get("/about", function(request, response){
    response.end("Welcome to the about page!");
});

app.get("/contact", function(request, response){
    response.end("Welcome to the contact page!");
});

//Create the global route handler to handle bad requests.
app.use(function(request, response){
    response.statsCode = 404;
    response.end('404!'); // Displays "404!" error message to the end user if the user visits a page not coded for.  
});

//Create the node server and listen on port 3000.
http.createServer(app).listen(3000, function() {
    console.log('Application started on port ', 3000);
});