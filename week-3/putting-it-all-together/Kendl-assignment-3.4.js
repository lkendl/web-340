/*
============================================
; Title: Assignment 3.4
; File Name: Kendl-assignment-3.4.js
; Author: Professor Krasso
; Date: 20 January 2022
; Modified By: Laura Kendl
; Description: Demonstrates how routing, HTTP requests, Express middleware,
; logging, and sending data to and from the server works.
; Resources:
; Blackboard: Code provided by Professor Krasso in WEB340 Assignment 3.4 Outline
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

app.get("/", function(request, response) {
    response.render("index", {
        message: "home page"
    });
});

app.get("/about", function(request, response) {
    response.render("about", {
        message: "about page"
    });
});

app.get("/contact", function(request, response) {
    response.render("contact", {
        message: "contact page"
    });
});

app.get("/products", function(request, response) {
    response.render("products", {
        message: "products page"
    });
});

http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080.");
 });