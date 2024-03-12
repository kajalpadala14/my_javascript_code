/*Write a program to take 4 numbers from the user and output the third max of these 4 numbers.*/
const input = require("readline-sync");
let a = input.questionInt("Enter the first value:");
let b = input.questionInt("Enter the second value:");
let c = input.questionInt("Enter the third value:");
let d = input.questionInt("Enter the fourth value:");
if(a>b)
{
    max=a,min=b;
}
else  
{
    max=b,min=a;
}
if(c>d)
{
    max1=c,min1=d;
}
else 
{
    max1=d,min1=c;
}
if( max>max1)
{
    max2=max,min2=max1;
}
else 
{
    max2=max1,min2=max ;
}
if
(min>min1)
{
   max3=min,min3= min1;
}
else
{
    max3=min1,min3=min;
}
if(min2<max3)
{
    console.log(min2)
}
else
{
console.log(max3);
}