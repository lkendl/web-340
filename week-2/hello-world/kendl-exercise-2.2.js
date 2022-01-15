/*
============================================
; Title: Exercise 2.2
; File Name: kendl-exercise-2.2.js
; Author: Professor Krasso
; Date: 13 January 2022
; Modified By: Laura Kendl
; Description: Demonstrates the basic steps for building a 
; Node application.
; Resources:
; Code provided by Professor Krasso in WEB340 Exercise 2.2 Outline (Blackboard)
===========================================
*/

//Requires the Express library.
var express = require('express');
//Requires the http library to start the server.
var http = require('http');

//Calls the Express function to start a new Express application.
var app = express();


//Create a function to log a message to console and to return a value to user requesting access to the URL.
app.use(function(req, res)
{
    console.log('In comes a request to: ' + req.url);

    res.end('Hello World');
})

//Start the server on port 8080.
http.createServer(app).listen(8080, function()
{
    //Output a message to user that application has started on port 8080.
    console.log('Application started on port '+ 8080);

});