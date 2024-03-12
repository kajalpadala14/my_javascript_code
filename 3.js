/*
Write a program to take two values from the user and swap them.
*/
 const input = require("readline-sync");
 let a = input.questionInt("Enter what you want:");
 let b = input.questionInt("Enter what you want:")
 {
     c = a;
     a = b;
     b = c;
 }
 console.log(a,b);
 //console.log(b);