/*
============================================
; Title: Exercise 7.2
; File Name: Kendl-exercise-7.2.js
; Author: Professor Krasso
; Date: 15 February 2022
; Modified By: Laura Kendl
; Description: Demonstrates how to use Mocha for testing purposes.
; Resources:
; Blackboard: Code provided by Professor Krasso in WEB340 Exercise 7.2 Outline
===========================================
*/

// Require JavaScript libraries.
var assert = require("assert");

describe("String#split", function() {

    it("should return an array of fruits", function() {

        assert(Array.isArray("Apple,Orange,Mango".split(",")));

    });

});

