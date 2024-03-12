/*"Write a program to take a number from the user and output whether that number is 
negative, positive or zero.

Test Case1:
Input:
6
Output:
Positive

Test Case2:
Input:
0
Output:
Zero"*/
const input=require("readline-sync");
let n = input.questionInt("Enter the value:");
if (n<0) 
{
    console.log("negative" );
}
else
{
    console.log("Positive");
}
if(n==0)
{
    console.log("zero");
}