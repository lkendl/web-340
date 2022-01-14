/*
============================================
; Title: Assignment 1.5
; File Name: kendl-assignment-1.5.js
; Author: Professor Krasso
; Date: 7 January 2022
; Modified By: Laura Kendl
; Description: Demonstrates how to create a Node server.
; Resources:
; Code provided by Professor Krasso in WEB340 Assignment 1.5 Outline (Blackboard)
===========================================
*/

// Variable declaration
var http = require("http");

function processRequest(req, res) {

var body = "I'm not superstitious, but I am a little stitious.";

    var contentLength = body.length;

    res.writeHead(200, {

        'Content-Length': contentLength,

        'Content-Type': 'text/plain'

    });

    res.end(body);

}

var s = http.createServer(processRequest);

s.listen(8080);