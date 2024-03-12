/*"Write a program to take a number from the user and then determine if that number is a special type of
 number called a 'perfect number'.
 A perfect number is a number where the sum of all its factors (excluding the number itself) 
 is equal to the number itself. Print Yes if the number is a perfect number else print No. */
 const input = require("readline-sync");
 let a = input.questionInt("enter the number:");
 let i = 1;
 let sum = 0;
 while (i < a) 
 {
     if (a % i == 0) 
     {
         sum = sum + i;
     }
     i = i + 1;
 }
 if (sum == a) {
     console.log("yes");
 } else {
     console.log("no");
 }
 
