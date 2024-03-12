const input = require("readline-sync");
let n = input.questionInt("Enter the size of the array: ");
let a = [];
let b = [];
let k = input.questionInt("Enter the number of rotations: ");
for (let i = 0; i < n; i++)
{
    let c = input.questionInt("Enter the element: ");
    a.push(c);
}
// Rotate the elements
for (let i = k; i < n; i++) 
{
    b.push(a[i]);
}

for (let i = 0; i < k; i++) 
{
    b.push(a[i]);
}

console.log("Rotated array:", b.join(' '));
