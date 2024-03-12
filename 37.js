/*"Write a program to take N numbers from a user as input and then print the duplicates in those N numbers. Also, take N as an input from the user.

Test Case 1:
Input:
5
2 4 2 6 3
Output:
2

Test Case 2:
Input:
6
2 4 6 3 3 2
Output:
3 2
"*/
const input = require("readline-sync");
let n = input.questionInt("Enter the size of array:");
let arr=[];
let i=0;
let c=1;
while (i<n) 
{
    let b = input.questionInt("enter:")
    arr[i]=b;
    i++;
}
i=0;
while (i<n) 
{
  
    j=i+1;
    while (j<n) 
    {
        if (arr[i] == arr[j])                              
        {
          
           c=c+1;   
           let k =j;

          while(k<n-1)
          {
            arr[k]=arr[k+1];
             k++;
          }

            n=n-1;
       }
      else
       {
         j=j+1;
       }
    }
    if (c>1)
    {
       console.log(arr[i]);
    }
    c=1;
    i++;
}