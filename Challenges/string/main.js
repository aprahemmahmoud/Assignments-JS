/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

let a = " Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(a.slice(2,6)); // Zero

// 8 H
console.log(a.charAt(a.length - 4).toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(a.split(" Web School")); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${a.substr(0,6)} ${a.substr(-6)}`); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(`${a[a.indexOf("E")].toLowerCase()}${a.slice(a.indexOf("lz"),a.lastIndexOf()).toLocaleUpperCase()}${a[a.indexOf("l")].toLowerCase()}`); // eLZERO WEB SCHOOl