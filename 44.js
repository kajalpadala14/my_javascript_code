/*
Write a program to create an array of 7 numbers from the user, and print true if the complete array consists of consecutive numbers or not.
Consecutive numbers mean they should follow the a,a+1,a+2,a+3,a+4...form.
If the user entered elements 3,4,5,6,7,8,9 then the output should be "Yes".
If the user entered element 9,8,7,6,5,4,3 then the output should be "No"
*/
const input = require("readline-sync");
let n = input.questionInt("Enter the size of array:");
let a =[];
let c = [];
let i = 0;
let j = 1,count =0;
for (let i = 0; i < n; i++) 
{
    let b = input.questionInt("enter the elements:");
    a[i] = b;
}
i = 0;
let d = a[i + 1] - a[i];
while (i < n - 1) 
{
   
    if (a[i]+d == a[i+1]) 
    {
        //c.push(a[i]);
        //console.log("yes it is consecutive");
        count += 1;
    }
  i++;
}

if(count == n-1)
{
    console.log("yes it is consecutive"); 
}
else
{
    console.log("not consecutive"); 
}

