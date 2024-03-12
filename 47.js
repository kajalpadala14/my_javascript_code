/*Write a program to take a sorted array from the user as input and find a number using Binary Search the array.*/

const input=require("readline-sync");
let n = input.questionInt("Enter the size of arr:");
let i = 0;
let c = input.questionInt("Enter the target number:")
let a = [];
for (let i = 0; i < n; i++) 
{
    let b = input.questionInt(`Enter number ${i + 1}: `);
    a.push(b);
}
w=0;
p=n-1;
while (w<=p) 
{
    mid=Math.floor((w+p)/2);
    if (a[mid]===c) 
    {
        console.log(`The number ${c}is found at index ${mid}`);
        break;
    }
    else if (a[mid]<c)
    {
        w= mid+1;
    }
    else
    {
        p=mid-1;
    }
}
if (a[mid]!==c) 
{
    console.log(`The number ${c} is not found in the array`);
}



