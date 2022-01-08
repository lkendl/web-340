/*
============================================
; Title: Exercise 1.3
; File Name: kendl-exercise-1.3.js
; Author: Professor Krasso
; Date: 7 January 2022
; Modified By: Laura Kendl
; Description: Demonstrates how Node handles URLs and how to access components of a URL string.
; Resources:
; Code provided by Professor Krasso in WEB340 Exercise 1.3 Outline (Blackboard)
===========================================
*/

//Import a node specific library.
var url = require("url");

//Set variable to hold stringed URL value and use parse to segregate pieces of URL.
var parsedURL = url.parse("https://www.example.com/profile?name=kendl");

//Call three console.log functions to capture the three pieces of the stringed URL.
console.log(parsedURL.protocol); //Expected result: "https:"
console.log(parsedURL.host); //Expected result: "www.example.com"
console.log(parsedURL.query); //Expected result: "name=kendl"