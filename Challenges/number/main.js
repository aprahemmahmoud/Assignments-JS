/*
  Number Challenge
*/

let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(+(Math.min(a,b,c,d).toFixed()));

// Use Variables a + d One Time To Get The Needed Output
console.log(a**(+(d.toFixed()))); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(+(d.toFixed()));
console.log(parseInt(d));
console.log(Math.floor(d));
console.log(Math.round(d));

// Use Variables b + d To Get This Valus
console.log(); // 66.67 => String
console.log(); // 67 => Number