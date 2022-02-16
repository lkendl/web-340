/*
============================================
; Title: Exercise 7.3
; File Name: Kendl-fruits.js
; Author: Professor Krasso
; Date: 15 February 2022
; Modified By: Laura Kendl
; Description: Demonstrates how to use Chai for testing purposes.
; Resources:
; Blackboard: Code provided by Professor Krasso in WEB340 Exercise 7.3 Outline
===========================================
*/

// This function splits a comma separated string into an array.
function fruits(str) {
    return str.split(",");
}

module.exports = fruits;