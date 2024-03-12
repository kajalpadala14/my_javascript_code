/*"Write a program to take three numbers from the user and print the greater
 number of the three numbers. (Assume all three numbers are distinct)
Test Case1:
Input:
20
3
43
Output:
43"
*/
const input = require("readline-sync");
let a = input.questionInt("Enter the first value:");
let b = input.questionInt("Enter the second :");
let c = input.questionInt("Enter the third number:"); 
if (a>b) 
{
    l=a;
    sl=b;
}else
{
  l=b;
  sl=a;
}
if(l>c)
{
  console.log(l);
}
else
{
    console.log(c);
}