const input = require("readline-sync");
let n = input.questionInt("Enter the size of first array: ");
let m = input.questionInt("Enter the size of second array: ");
let a = Array(n);
let b = Array(m);
let c = Array(n + m);
for (let i = 0; i < n; i++) {
    a[i] = input.questionInt("Enter element of first array: ");
}
for (let i = 0; i < m; i++) {
    b[i] = input.questionInt("Enter element of second array: ");
}
let i = 0, j = 0, k = 0;
while (i < n && j < m) {
    if (a[i] < b[j]) {
        c[k++] = a[i++];
    } else if (a[i] > b[j]) {
        c[k++] = b[j++];
    } else {
        c[k++] = a[i++];
        j++;
    }
}
while (i < n) {
    c[k++] = a[i++];
}
while (j < m) {
    c[k++] = b[j++];
}

//console.log("Merged sorted array: ", c);

let u = [];
let intersection = [];
let q = 0;
for (let i = 0; i < c.length; i++) {
    if (c[i] !== q) {
        u.push(c[i]);
    }
    q= c[i];
}
console.log("Union:", u);

i = 0;
j = 0;
while (i < n && j < m) {
    if (a[i] < b[j]) {
        i++;
    } else if (a[i] > b[j]) {
        j++;
    } else {
        intersection.push(a[i]);
        i++;
        j++;
    }
}
console.log("Intersection:", intersection);
