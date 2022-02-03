/*
============================================
; Title: Exercise 5.3
; File Name: Kendl-exercise-5.3.js
; Author: Professor Krasso 
; Date: 3 February 2022
; Modified By: Laura Kendl
; Description: Demonstrates how to use Pug templates.
; Resources:
; Blackboard: Code provided by Professor Krasso in WEB340 Exercise 5.3 Outline
; JavaScript: https://www.javascript.com/learn/strings#:~:text=Enclosing%20Quotation%20Marks&text=That%20means%20strings%20containing%20single,need%20to%20use%20single%20quotes.&text=%22It's%20six%20o'clock.,to%20escape%20the%20quotation%20marks. (JavaScript Strings)
===========================================
*/

// Require JavaScript libraries.
var express = require("express");
var http = require("http");
var path = require("path"); // Helps find the directory where the views will be saved.
var pug = require("pug");

// Create Express application.
var app = express();

// Specify 'views' folder to resolve Pug templates.
app.set("views", path.resolve(__dirname, "views"));

// Tell JavaScript to use Pug as its view engine.
app.set("view engine", "pug");

// This GET request returns a text message when rendering index page.
app.get("/", function (request, response) {
       
    response.render("index", {
       
        message: " \"You miss 100% of the shots you don't take. - Wayne Gretsky\" - Michael Scott"
   
    });
});

// Start the server.
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});
