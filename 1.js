/*Write a program to take three variables to store your birth date, birth month, and birth year, 
respectively, and then print them one by one in a specified order*/
const input = require("readline-sync");
const monthNames = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];
let D = input.questionInt("Enter the date:");
let M = input.questionInt("Enter the Month(as a number from 1 to 12):")-1;
let Y = input.questionInt("Enter the year:");
console.log(" Birth date:"+D);
console.log("Birth month:"+monthNames[M]);
console.log(" Birth year:"+Y);