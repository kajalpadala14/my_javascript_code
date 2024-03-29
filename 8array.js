//Write a program to find the sum of all diagonal elements of a matrix.
const input = require("readline-sync");
let n = input.questionInt("Enter the Row size:");
let k ;
let a =[];
let i=0;
let sum = 0;
    
         while (i<n) 
    {
        a[i]=[];
        let j = 0;
         while (j<n) 
        {
            a[i][j]=input.questionInt(`Enter the number [${i}] and [${j}]:`);
            j++;
        }
        i++;
    }
      k="";
      i=0;
    for (let i = 0; i < n; i++) 
    {
        for (let j = 0; j < n; j++) 
        {
            if (i==j) 
            {   
            
                sum+= a[i][j];
                k +=a[i][j]+' ';
                
            }
            
        }
        
    }
    console.log(k ,"-",sum);
     z='';
     q=0;
    while (i<n) 
    {
        let j=n-1;
        while (j>=0) 
        {
            if (i+j===n - 1) 
            {
                q+= a[i][j];
                z +=a[i][j]+' ';
            }
            j--;
        }
        i++;
    }
     console.log(z,"-",q);