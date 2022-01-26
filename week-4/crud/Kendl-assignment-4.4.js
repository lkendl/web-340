/*
============================================
; Title: Assignment 4.4
; File Name: Kendl-assignment-4.4.js
; Author: Professor Krasso
; Date: 25 January 2022
; Modified By: Laura Kendl
; Description: Demonstrates CRUD operations in a Node.js API.
; Resources:
; Blackboard: Code provided by Professor Krasso in WEB340 Assignment 4.4 Outline
; Codeburst.io: https://codeburst.io/process-env-what-it-is-and-why-when-how-to-use-it-effectively-505d0b2831e7 
;   (process.env: What it is and why/when/how to use it effectively)
===========================================
*/

// Require JavaScript libraries.
const express = require("express");
const http = require("http");
const logger = require("morgan"); // (OPT.)

// Create Express application.
let app = express();

// Implement logger to view output in console window (OPT.).
app.use(logger("dev"));

// Implement port as an environment variable with default of port 3000.
app.set("port", process.env.PORT || 3000);

// CRUD requests with messages to client.
app.get("/", function (req, res) {
    res.send("API invoked as an HTTP GET request.");
});

app.put("/", function (req, res) {
    res.send("API invoked as an HTTP PUT request.");
});

app.post("/", function (req, res) {
    res.send("API invoked as an HTTP POST request.");
});

app.delete("/", function (req, res) {
    res.send("API invoked as an HTTP DELETE request.");
});

// Start the server.
http.createServer(app).listen(app.get("port"), function() {
    console.log(`Application started and listening on port ${app.get("port")}`);
});
