/*"Imagine you're on a fun journey of exploring numbers! You're interested in finding out all the even numbers up to a certain value. Even numbers are those that are divisible by 2 without leaving a remainder. Your task is to print all the even numbers from 1 up to the number you choose.

Take a number N from the user as input, and print even numbers up to N.

Tips:

1. Remember, even numbers are those that are divisible by 2 without leaving a remainder.
2. Pay attention to printing the numbers in the correct format.
3. Ensure accuracy in the range of numbers displayed.

Test Case1:
Input:
10
Output:
2  4 6 8 "*/
const input=require("readline-sync");
let n = input.questionInt("Enter the number:");
i=2;
while (i<n) 
{
  if(i%2==0)
  {
    console.log(i);
  }
  i++;
}