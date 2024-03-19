/*
Write a program to take an array of size N and a number K from the user as input,
 and print the elements of an array in a rotated manner with a gap of K.*/

const input = require("readline-sync");
let n = input.questionInt("Enter the size of array: ");
let a = [];
let i = 0;
let gap = input.questionInt("enter the gap number:")
let k = 0;

     while (i < n) 
{
          let b = input.questionInt("Enter the element at index ${i + 1}:" );
          a.push(b);
          i++;
}
          i = 0;
     while(k<n)
{
          let s = 0;
     while(s<gap)
{
          r = i % n;
     if(a[r]!=0)
{
          s = s + 1;
}
          i = i + 1;
}
          console.log(a[r]);
          a[r] = 0;
          k = k + 1
}


















          