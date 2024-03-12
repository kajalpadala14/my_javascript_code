/*"Write a program to take two inputs from the user and swap them without using a temporary or third variable.

Test Case1:
Input:
2
3
Output:
3
2
"*/
const input = require("readline-sync");
let a = input.questionInt("Enter the value:");
let b = input.questionInt("Enter the value:");
{
    a=a+b;
    b=a-b;
    a=a-b;
}
console.log(a);
console.log(b);
/*const input = require("readline-sync");
let a = input.questionInt("Enter the value:");
let b = input.questionInt("Enter the value:");
{
    q=(a*b/a);
    c=(a*b/b);
}
console.log(q);
console.log(c);*/