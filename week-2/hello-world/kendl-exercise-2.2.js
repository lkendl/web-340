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

//Require Express library
var express = require('express');
//Require library to start the server
var http = require('http');

//Call Express function to start a new Express application
var app = express();


//Function to log message to console and to return value to user requesting access to the URL
app.use(function(req, res)
{
    console.log('In comes a request to: ' + req.url);

    res.end('Hello World');
})

//Start server on port 8080
http.createServer(app).listen(8080, function()
{
    //Output message to user that application has started on port 8080
    console.log('Application started on port '+ 8080);

});