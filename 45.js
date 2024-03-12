/*Write a program to find the sum and average of elements in an array. Take elements as input from the user.*/
const input = require("readline-sync");
let n = input.questionInt("enter the number:");
let a = [];
let sum = 0;
for (let i = 0; i < n; i++) 
{
    let b = input.questionInt("enter the elements:");
    a[i]=b;
}
i = 0;
while (i<n) 
{
   sum = sum +a[i];
   
   i++;
}
{
average=sum/n;
}
console.log("sum of the element:"+sum);
console.log("average of the element:"+average);