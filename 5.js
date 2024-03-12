/*"Write a program to take two numbers A and B from the user and calculate the 
quotient and remainder when number A is divided by number B.*/
const input = require("readline-sync");
let a = input.questionInt("Enter the first number:");
let b = input.questionInt("Enter the second number:");
{
    D=a%b;
    ID=Math.floor(a/b);
}
console.log("This is the remainder:"+D);
console.log("This is the quotient:"+ID);
