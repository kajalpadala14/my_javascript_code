/*"Write a program to reverse the array and print the reversed array.

Test Case1:
Input:
23 45 32 25 46 33 71 90
Output:
90
71
33
46
25
32
45
23"*/
const input=require("readline-sync");
let n=input.questionInt("enter the size of arr:");
let i=0;
let arr=[]
while(i<n)
{
    let a=input.questionInt("enter the value:")
    arr[i]=a;
    i++;
}
i=n;
let c = Array(n + m);
for (let i = 0; i < n; i++) 
while(i>0)
{
    console.log(arr[i]);
    i--;
}