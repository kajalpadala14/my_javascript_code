/*"Write a program to take N numbers from the user and print the frequency of every number.

Test Case 1:
Input:
6
2 4 2 6 3 6
Output:
2 - 2
4 - 1
6 - 2
3 - 1
"*/
const input = require("readline-sync");
let n = input.questionInt("Enter the size of array  :");
i=0;
c=1;
arr=[];
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
        if (arr[i]==arr[j]) 
        {
            c=c+1;
            k=j;
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
    if(c>1)
    {
        console.log(arr[i],"-",c);
    }
    c=1;
    i++;
}