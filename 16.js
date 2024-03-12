1/*"
Imagine you and your friends are exploring the concept of leap years. A leap year is a year that is evenly divisible by 4, except for years that are divisible by 100 but not divisible by 400. In simpler terms, it's a special year with an extra day in February (February 29th). You're curious to know whether a particular year is a leap year or not.

Write a program to take a year from the user and output whether a given year is a leap year or not.*/
const input=require("readline-sync");
let y = input.questionInt("Enter the year:");
if (y%100==0) 
{
    if (y%400==0) 
    {
        console.log("This is a leap year");
    }
    else
    {
        console.log("This is a not a leap year");
    }
}
else if(y%4==0)
{
console.log("This is a leap year");
}
else
{
console.log("This is not a leap year");
}