/*
============================================
; Title: Exercise 3.2
; File Name: kendl-exercise-3.2.js
; Author: Professor Krasso
; Date: 20 January 2022
; Modified By: Laura Kendl
; Description: Demonstrates how to use logging to debug
; and troubleshoot JavaScript applications with the Morgan logger.
; Resources:
; Blackboard: Code provided by Professor Krasso in WEB340 Exercise 3.2 Outline
===========================================
*/

//Require the Express library.
var express = require("express");
//Require the http library to start the server.
var http = require("http");

var path = require("path");

var logger = require("morgan");

//Call the Express function to start a new Express application.
var app = express();

app.set("view engine", "ejs"); // Tell Express to use the EJS view engine

app.use(logger("short"));

app.get("/", function (request, response) {
    response.render("index", {
        message: "This is the Way."
    });
});

http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080");
});
