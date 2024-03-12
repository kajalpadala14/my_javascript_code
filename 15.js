/*"Write a program to take four numbers from the user and print the greater number of 
the four numbers. (assume all the numbers are distinct).

Test Case1:
Input:
98
13
29
58
Output:
98"
*/
const input = require("readline-sync");
let a = input.questionInt("Enter the first number:");
let b = input.questionInt("Enter the second number:");
let c = input.questionInt("Enter the third valur:");
let d = input.questionInt("Enter the forth number");
if (a>b) 
{
    l = a;
    s = b;
}
else 
{
    l = b;
    s = a;
}
if(c>d)
{
    l1=c;
    s1=d
}
else
{
    l1 = d;
    s1 = c;
 }
 if(l>l1)
 {
    console.log(l);
 }
 else
 {
    console.log(l1);
 }
