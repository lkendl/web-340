/*
============================================
; Title: Exercise 6.3
; File Name: Kendl-exercise-4.3.js
; Author: Professor Krasso
; Date: 9 February 2022
; Modified By: Laura Kendl
; Description: Demonstrates how to use Mongoose.js to 
; talk to Mongo from Node.
; Resources:
; Blackboard: Code provided by Professor Krasso in WEB340 Exercise 6.3 Outline
===========================================
*/

// Require JavaScript libraries.
var express = require("express");
var http = require("http");
var logger = require("morgan"); 
var mongoose = require("mongoose");

//Specify database connection.
var mongoDB = "mongodb+srv://lkendl:admin@buwebdev-cluster-1.p8egd.mongodb.net/ems?retryWrites=true&w=majority";

mongoose.connect(mongoDB);

// Add a Promise.
mongoose.Promise = global.Promise;

// Create database variable to hold connections.
var db = mongoose.connection;

// Add general error handling. Output results to console.
db.on("error", console.error.bind(console, "MongoDB connection error"));
db.once("open", function() {
    console.log("Application connected to mLab");
});

// Create Express application.
var app = express();

// Implement logger to view output in console window.
app.use(logger("dev"));

// Start the server.
http.createServer(app).listen(5000, function() {
    console.log("Application started on port 5000!");
});
