/*Write a program to transpose matrix A. Store the result in a separate matrix.*/
const input = require("readline-sync");
let r = input.questionInt("Enter the Row size:");
let c = input.questionInt("Enter the colum size:");
let k =[];
let a =[];
let i=0;
    
         while (i<r) 
    {
        a[i]=[];
        let j = 0;
         while (j<c) 
        {
            a[i][j]=input.questionInt(`Enter the [${i}] [${j}]number:`);
            j++;
        }
        i++;
    }

      i=0;
         while (i<c) 
    {
         k[i]  = [];
         let j =0;
    
         while (j<r) 
    {
        k[i][j] = a[j][i];
        j++;
    }
        i++;
    }
    console.log(k);