//multiplication in two matrics.

const input = require("readline-sync");
let r = input.questionInt("Enter the Row size:");
let c = input.questionInt("Enter the colum size:");
let q =[];
let k =[];
let a =[];
let b =[];
let i=0;
    
         while (i<r) 
    {
        a[i]=[];
        let j = 0;
         while (j<c) 
        {
            a[i][j]=input.questionInt("Enter the first number:");
            j++;
        }
        i++;
    }

      i=0;
         while (i<r) 
    {
        b[i]=[];
        let j=0;
         while (j<c) 
         {
            b[i][j]=input.questionInt("Enter the second number:")
            j++;
         }
         i++;
    }
    i=0;

      while (i<r) 
    {
        k[i]=[];
        let j =0;
      while (j<c) 
          {
            k[i][j];
            j++;
          }
          i++;
    }
    i=0;
    while(i<r)
    {
      let j=0;
      while(j<c)
      {
        k[i][j]=a[i][j]*b[i][j];
        j++;
      }
      i++;
    }
    console.log(k);