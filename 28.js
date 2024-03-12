/*"Write a program to take a number from the user and print the sum of the digits of the given number.

Test Case1:
Input:
456
Output:
15
Explanation:
4+5+6 = 15"*/
const input = require("readline-sync");
let N = input.questionInt("Enter the number: ");
let sum = 0;
let R;
while (N>0) 
{
    R=N%10;
    sum = sum+R;
    N=Math.floor(N/10)
}
console.log(sum);