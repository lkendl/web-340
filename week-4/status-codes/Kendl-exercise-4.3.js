/*
============================================
; Title: Exercise 4.3
; File Name: Kendl-exercise-4.3.js
; Author: Professor Krasso
; Date: 25 January 2022
; Modified By: Laura Kendl
; Description: Demonstrates how to set HTTP status codes.
; Resources:
; Blackboard: Code provided by Professor Krasso in WEB340 Exercise 4.3 Outline
===========================================
*/

/** 
 *  Most Common Status Codes:
        200: OK
        401: Unauthorized
        403: Forbidden
        404: Not Found
        405: Method Not Allowed
        500: Internal Server Error
        501: Not Implemented
        503: Service Unavailable
 */

// Require JavaScript libraries.
var express = require("express");
var http = require("http");
var logger = require("morgan"); // (OPT.)

// Create Express application.
var app = express();

// Implement logger to view output in console window (OPT.).
app.use(logger("dev"));

// This GET request returns a 404 HTML status with a JSON error message.
app.get("/not-found", function (request, response) {
   
    response.status(404);
    
    response.json({
       
        error: "The page you seek is not here."
   
    })
});

// This GET request returns a 200 HTML status with a JSON message.
app.get("/ok", function (request, response) {

    response.status(200);

    response.json({
        message: "This request is A-OK."
    })
});

// This GET request returns a 501 HTML status with error message.
app.get("/not-implemented", function (request, response) {

    response.status(501);

    response.json({
        error: "Internal server error."
    })
});


// Start the server.
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});
