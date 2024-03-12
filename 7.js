/*"Write a program to convert a temperature from Celsius to Fahrenheit using the formula  C/5 = (F-32)/9

Test Case1:
Input: 
30 
Output:
86"*/
const input = require("readline-sync");
let c = input.questionInt("Enter the value: ");
{
    F=(c*9/5+32)
}
console.log(F);