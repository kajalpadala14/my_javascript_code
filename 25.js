/*"Write a program to take two integers M, and N and print the sum of numbers in the range M to N.

Test Case1:
Input:
2
7
Output:
27
Explanation:
Output should be 27 as the sum of numbers (2+3+4+5+6+7=27)"*/
const input=require("readline-sync");
let M = input.questionInt("Enter the first number:");
let N = input.questionInt("Enter the last value:");
let i = M;
let sum = 0;
while (i<=N) 
{
    sum=sum+i;
    i++;
}
console.log(sum);