/*"Write a program to take two numbers from the user and perform Six basic operations (addition, subtraction, multiplication, division, integer division and modulus) on those two numbers.
        
Note: Print the output in the order as mentioned in the question.

Test Case1:
Input: 
12 
5
Output: 
17
7
60
2.4
2
2
"*/
const input = require("readline-sync");
let a = input.questionInt("Enter the number:");
let b = input.questionInt("Enter the number:");
{
    A=a+b;
    B=a-b;
    C=a*b;
    D=a/b;
    E=a%b;
    F=Math.floor(a/b);
}
console.log(A);
console.log(B);
console.log(C);
console.log(D);
console.log(E);
console.log(F);
