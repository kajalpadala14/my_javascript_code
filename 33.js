/*Write a program to create an array of natural numbers till 20 and print it.*/
const input = require("readline-sync");
let n = input.questionInt("Enter the value:");
let array =[];
i=0,b=1;
while (i<n) 
{
      array[i]=b;
      i++;
      b++;
}
i=0;
while (i<n) 
{
    console.log(array[i]);
    i++;
}