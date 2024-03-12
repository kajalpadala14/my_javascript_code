/*"Take the number N and the name from the user as inputs, and print the name N times.

Test Case1:
Input:
2
Bedanti
Output:
Bedanti 
Bedanti"*/
const input = require("readline-sync");
let n = input.questionInt("Enter the number:")
i=1;
while (i<=n)
 {
    console.log("Bedanti");
    i++;
}