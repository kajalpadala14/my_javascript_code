/*"Write a program to take 3 numbers from the user and output the second max of 3 numbers.
(First, do it in the normal way then do it by using 3 comparisons)

Test Case1:
Input:
5
4
6
Output:
5"*/
const input = require("readline-sync");
let a = input.questionInt("Enter the first value:");
let b = input.questionInt("Enter the second number:");
let c = input.questionInt("Enter the third number:");
if (a>b) 
{
    l=a;
    s=b;
}
else
{
    l=b;
    s=a;
}
if (l>c)
 {
    if(s>c)
    {
      console.log(s);
    }
    else
    {
      console.log(c);
    }
}
else
{
    console.log(l);
}