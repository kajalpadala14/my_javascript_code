/*"Write a program to take size of array, array and target as input from the user and check whether the target exists in this array or not.

Test Case1:
Input:
7
1 2 3 4 5 6 7
3
Output:
Yes

Test Case2:
Input:
8
Output:
No"*/
const input=require("readline-sync");
let n = input.questionInt("Enter the size of arr");
let i = 0;
let c = input.questionInt("Enter the target number:")
let arr = [];
let k=0;
while (i<n)
{
   let b = input.questionInt("Enter the number:") 
   arr[i]=b;
   i++;
}
i=0;
while (i<n) 
{
    if(arr[i]==c)
    {
        k=1;
    }
    
    i++;
}
if(k==1)
{
    console.log("yes");
}
else
{
    console.log("no");
}

