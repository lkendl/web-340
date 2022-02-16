/*
============================================
; Title: Assignment 7.4
; File Name: employee.js
; Author: Professor Krasso 
; Date: 15 February 2022
; Modified By: Laura Kendl
; Description: Demonstrates how to use Mongoose by 
; defining a schema and mapping the schema to a Mongoose 
; model.
; Resources:
; Blackboard: Code provided by Professor Krasso in WEB340 Assignment 7.4 Outline
===========================================
*/

// Require JavaScript libraries.
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Define the employeeSchema.
var employeeSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true}
});

// Define the employee model.
var Employee = mongoose.model("Employee", employeeSchema);

// Export the model so it is accessible to other JavaScript files.
module.exports = Employee;