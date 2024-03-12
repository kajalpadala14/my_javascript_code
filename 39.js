/*"Write a program to take value N from the user and print the following pattern based on the user input.
array = [2, 3, 5, 2, 1]
>>                        
>>>                
>>>>>
>>                        
>  */
const input = require("readline-sync");
let n = input.questionInt("enter the number:");
let i = 0;
let arr = [];
     while(i<n)
{
         let b = input.questionInt("enter the number:")
         arr[i] = b;
         i = i + 1;
}
         i = 0;
     while(i<n)
{
         console.log(">" .repeat(arr[i]));
         i = i + 1;
}