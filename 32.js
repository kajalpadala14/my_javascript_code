/*"Write a program to print all the numbers from the given array using a loop. 
L = {23, 45, 32, 25, 46,33, 71, 90}

Output:
23
45
32
25
46
33
71
90"*/
const input = require("readline-sync");
let n = input.questionInt("Enter the number:")
let array=[];
let i =0;
while (i<n) 
{
    let b = input.questionInt("enter:")
    array[i]=b;
    i++;
}
i=0;
while (i<n) 
{
    console.log(array[i]);
    i++;
}
