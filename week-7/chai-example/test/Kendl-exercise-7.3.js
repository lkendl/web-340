/*
============================================
; Title: Exercise 7.3
; File Name: Kendl-exercise-7.3.js
; Author: Professor Krasso
; Date: 15 February 2022
; Modified By: Laura Kendl
; Description: Demonstrates how to use Chai for testing purposes.
; Resources:
; Blackboard: Code provided by Professor Krasso in WEB340 Exercise 7.2 Outline
===========================================
*/

const fruits = require("../Kendl-fruits");
const chai = require("chai");
const assert = chai.assert;

describe("fruits", function() {
    it("should return an array of fruits", function() {
        const f = fruits("Apple,Orange,Mango");
        assert(Array.isArray(f));
    });
});


