/*"Write a program to calculate the sum of the following series where N is input
 from the user. 1 + 1/2 + 1/3 + 1/4 + 1/5 +…………1/N

Test Case1:
Input:
4
Output:
2.08"*/
const input = require("readline-sync");
let n = input.questionInt("Enter the n number:");
i = 1;
sum = 0;
while(i<=n)
{  
  {
  p=1/i;
  sum =sum+p;
  i++;
  }
}
console.log(sum);