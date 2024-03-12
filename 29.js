/*"Write a program that takes a number from the user and prints the number that is formed by reversing the digits of the number.

Test Case1:
Input:
123
Output:
321"*/
const input = require("readline-sync");
let N = input.questionInt("Enter the number: ");
let sum = 0;
let R;
while (N > 0) 
{
    R = N % 10;
    sum = sum * 10 + R;
    N = Math.floor(N / 10);
}
console.log(sum);