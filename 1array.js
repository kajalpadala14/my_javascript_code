const input=require("readline-sync");
let n = input.questionInt("Enter the value:")
let a=[];
s=1;
for(let i=0;n>i;i++)
{
    a[i]=[]
    for(let j=0;3>j;j++)
    {
        a[i][j]=s;
        s++;
    }
}
console.log(a)