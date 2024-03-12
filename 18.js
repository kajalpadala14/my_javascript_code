/*"Imagine you're working as a payroll manager in a company, and your job is to calculate the gross salary of employees based on their basic salary and certain allowances. The gross salary includes the basic salary along with House Rent Allowance (HRA) and Dearness Allowance (DA), which vary based on the employee's basic salary range.

Write a program to take the basic salary of an employee and calculate its Gross salary according to the following: (Gross salary is the sum of basic salary, HRA, and DRA)
Basic Salary <= 10000 : HRA = 20%, DA = 80%
Basic Salary <= 20000 : HRA = 25%, DA = 90%
Basic Salary > 20000 : HRA = 30%, DA = 95%
*/
const input = require("readline-sync");
let BS = input.questionInt("Enter the basic salary:");
if (BS<=10000)
{
    HRA=BS*20/100;
    DA=BS*80/100;
    GS=BS+HRA+DA;
}
else if(BS<=20000)
{
    HRA=BS*25/100;
    DA=BS*90/100;
    GS=BS+HRA+DA;
   
}
else
{
  HRA=BS*30/100;
  DA=BS*95/100;
  GS=HRA+DA+BS;
  
}
console.log(GS);

