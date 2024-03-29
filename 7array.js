//Write a program to find the position of an element in a 2D array or Matrix.
const input = require("readline-sync");
let r = input.questionInt("Enter the Row size:");
let c = input.questionInt("Enter the column size:");
let a = [];

     for (let i = 0; i < r; i++) 
{
    a[i] = [];
    for (let j = 0; j < c; j++) 
    {
        a[i][j] = input.questionInt(`Enter the number for row ${i + 1} and column ${j + 1}:`);
    }
}

         let target = input.questionInt("Enter the target number:");

         let found = false;

     for (let i = 0; i < r; i++) 
{
     for (let j = 0; j < c; j++) 
    {
        if (a[i][j] === target)
        { 
            console.log(`Position of element ${target}: Row ${i + 1}, Column ${j + 1}`);
            found = true;
            break;
        }
    }
     if (found) 
    {
        break;
    }
}

      if (!found) 
{
    console.log("Element not found in this array");
}

