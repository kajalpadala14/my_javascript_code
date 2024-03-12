/*"Imagine you're responsible for calculating electricity bills for households. Each household consumes electricity, and the bill varies based on the number of units consumed. The bill calculation involves different rates for different ranges of units consumed, along with an additional surcharge.

Write a program  to input electricity unit charges and calculate the total electricity bill according to the given condition:
For the first 50 units Rs. 0.50/unit
For the next 100 units Rs. 0.75/unit
For the next 100 units Rs. 1.20/unit
For units above 250 Rs. 1.50/unit
An additional surcharge of 20% is added to the bill*/
const input = require("readline-sync");
let u = input.questionInt("Enter the unit :");
if (u<=50)
{
    m=0.50*50;
    o=m*20/100;
    b=m+o;
}
else if (u<=150) 
{
    s=u-50;
    m=0.50*50;
    m1=s*0.75;
    p=m+m1;
    o1=p*20/100;
    b=p+o1;
}
else if (u<=250) 
{
    s1=u-150;
    m=0.50*50;
    m1=0.75*100;
    m2=s1*1.20;
    p1=m+m1+m2;
    o2=p1*20/100;
    b=p1+o2;
}
else
{
s2=u-250;
m=0.50*50;
m1=0.75*100;
m2=1.20*100;
m3=s2*1.50;
p2=m+m1+m2+m3;
o3=p2*20/100;
b=p2+o3;
}
console.log(b);