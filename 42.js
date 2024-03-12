/*Write a program, take two sorted arrays from the user as input and find the Union and Intersection of the arrays.*/
const input = require("readline-sync");
let n = input.questionInt("Enter the size of first array: ");
let m = input.questionInt("Enter the size of second array: ");
let a = Array(n);
let b = Array(m);
let c = Array(n + m);
for (let i = 0; i < n; i++) 
{
    a[i] = input.questionInt("Enter element of first array: ");
}
for (let i = 0; i < m; i++) 
{
    b[i] = input.questionInt("Enter element of second array: ");
}
let i=0,j=0,k=0;
while(i < n && j < m)
{
    if (a[i] < b[j])
    {
        c[k++] = a[i++];
    } else
    {
        c[k++] = b[j++];
    }
}
while (i < n)
{
    c[k++] = a[i++];
}
while(j < m)
{
    c[k++] = b[j++];
}
    
console.log("Merged sorted array: ",c);

