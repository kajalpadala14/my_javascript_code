/*"Write a program to take a number from the user and print the number
 of digits in the given number. (can you do it without  loop O(1) )

Test Case1:
Input:
456
Output:
3"*/
const input = require("readline-sync");
let N = input.questionInt("Enter the number: ");
let s = 0;
let R;
while (N > 0) 
{
    R = N % 10;
    s=s+1;
    N = Math.floor(N / 10);    
}
console.log(s);
