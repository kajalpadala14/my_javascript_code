/*"Imagine you're on an adventurous quest to unravel the mysteries of numbers! Today, your quest involves exploring the realm of odd numbers. Odd numbers are those that are not divisible by 2, leaving a remainder of 1. Your task is to calculate the sum of all the odd numbers up to a certain value chosen by you.

Write a program to print the sum of odd numbers up to N.

Tips:

1. Remember, odd numbers are those that are not divisible by 2, leaving a remainder of 1.
2. Pay attention to calculating the sum accurately.
3. Ensure the correctness of the range of numbers included in the sum.

Test Case1:
Input:
20
Output:
100
"*/
const input=require("readline-sync");
let n = input.questionInt("Enter the number:");
let i=1;
let sum=0;
while (i<=n) 
{
    if (i%2!=0) 
    {
        sum=sum+i;
    }
    i++;
}
console.log(sum);