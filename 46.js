/*In a certain hospital, the weights of newborn babies are recorded each month and then processed at the end of the month to determine the following:
1. Mean weight of the babies
2. maximum of the weights
3. Minimum the weights.
Write a program to show how the weights can be stored as an array first and then processed to determine the desired outputs. Input n from the user where n is the number of babies born in a particular month.
*/
const input = require("readline-sync");
let n = input.questionInt("Enter the number of babies born this month: :");
let a = [];
let sum = 0;
for (let i = 0; i < n; i++) 
{
    let b = input.questionInt("enter the elements:");
    a[i]=b;
}
i = 0;
while (i<n) 
{
   sum = sum +a[i];
   
   i++;
}
{
average=sum/n;
}
console.log("Mean weight of the babies:"+average);
let max = a[0];
let min = a[0];
i = 1; 
n=a.length;
while(i<=n)
{
    if(a[i]>max)
    {
      max=a[i];
    }
    if(a[i]<min) 
    {
      min =a[i];
    } 
    i++;
}
console.log( " maximum of the weights:"+max);
console.log( " Minimum the weights:"+min);
  