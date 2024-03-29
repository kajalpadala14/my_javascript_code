//Write a program to find the minimum element in the matrix.
const input = require("readline-sync");
let r = input.questionInt("Enter the Row size:");
let c = input.questionInt("Enter the column size:");
let a = [];
let i = 0;

      while (i < r) 
{
         a[i] = [];
         let j = 0;
    while (j < c) 
    {
         a[i][j] = input.questionInt(`Enter the number for row ${i + 1} and column ${j + 1}:`);
         j++;
    }
         i++;
}

         let min = a[0][0];
for (let i = 0; i < r; i++) 
{
    for (let j = 0; j < c; j++) 
    {
        if (a[i][j] < min) 
        {
            min = a[i][j];
        }
    }
}

console.log("The minimum element in the matrix is:", min);
