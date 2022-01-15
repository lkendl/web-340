/*
============================================
; Title: Assignment 2.4
; File Name: kendl-assignment-2.4.js
; Author: Professor Krasso
; Date: 14 January 2022
; Modified By: Laura Kendl
; Description: Demonstrates how to install and use Embedded 
; JavaScript (EJS) when building a Node application.
; Resources:
; Blackboard: Code provided by Professor Krasso in WEB340 Assignment 2.4 Outline
===========================================
*/

//Require the http library to start the server.
var http = require("http");

//Require the Express library.
var express = require("express");

//Require the path library.
var path = require("path");

//Call the Express function to start a new Express application.
var app = express();

//Tell Express the views are in the 'views' directory.
app.set("views", path.resolve(__dirname, "views"));

//Tell Express to use the EJS view engine.
app.set("view engine", "ejs");

//Define the route interceptors to catch URL messages and respond with the appropriate message to the user.
app.get("/", function(request, response) {
    response.render("index", {
        firstName: "John",
        lastName: "Wick",
        address: "121 Mill Neck in Long Island, NY",
    });
});

//Create the node server and listen on port 8080.
http.createServer(app).listen(8080, function() {
    console.log("EJS-Views app started on port 8080.");
});
