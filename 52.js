/*Write a program to take an unsorted array of size N that contains only non-negative integers, 
and find a contiguous subarray that adds to a given number S. In case of multiple subarrays, 
return the subarray which comes first on moving from left to right. 
Let us say the array is 3, 6, 7, 5, 10. And the value of S = 12. The output should be: 7, 5
Test Case1:
Input:
3 6 7 5 10
12
Output:
7 5
*/
const input = require("readline-sync");
let n = input.questionInt("enter the size of array:");
let a = [];
let sum = input.questionInt("enter the number:");
let i = 0;
let c = [];
let found=false;
     while (i < n) 
{
         let b = input.questionInt("enter the elements:");
         a.push(b);
         i++;
}
         i = 0; 
         let j = 1;
   while(i < n) 
{
   while(j < n) 
    {
         add = a[i] + a[j];
    if(add === sum) 
{        
         found=true;
         c.push(a[i], a[j]);
         break; 
}
         j++;
}
    if (c.length > 0)
        break;
         i = i + 1;
         j = i + 1;
}
console.log("Contiguous subarray:", c.join(' '));
if (!found)
{
    console.log("pair not found");
}