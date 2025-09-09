// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = 3;

// // Method 1
// myFriends.length = num
// console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// // Method 2
// myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];

// console.log(myFriends.slice(0,num)); // ["Ahmed", "Elham", "Osama"];

// myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// myFriends[num] = "";
// console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];

// myFriends.pop()

// console.log(myFriends); // ["Ahmed", "Elham", "Osama"];






// let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here


// let num1 = Array.isArray(friends),num2 = Array.isArray(friends) + Array.isArray(friends)

// console.log(friends.splice(num1,num2)); // ["Eman", "Osama"]

// let first = friends.shift() , soucnd = friends.pop();
// friends.shift()
// friends.pop()
// console.log(friends);



// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = [].concat(arrOne,arrTwo).sort().reverse();

// // Write One Single Line Of Code

// console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]


// let website = "Go";
// let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

// console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO



// let needle = "JS";
// let haystack = ["PHP", "JS", "Python"];

// // Write 3 Solutions

// haystack.includes(needle) ? console.log("found") : console.log("not found");
// haystack.indexOf(needle) != -1 ? console.log("found") : console.log("not found");
// haystack.lastIndexOf(needle) != -1? console.log("found") : console.log("not found");




// let arr1 = ["A", "C", "X"];
// let arr2 = ["D", "E", "F", "Y"];
// let lastArr1 = arr1.pop() , lastArr2 = arr2.pop() , lastArr2_1 = arr2.pop();
// let allArrs = [].concat(lastArr2_1,lastArr1,lastArr2);

// // Your Code Here

// console.log(allArrs.join("").toLowerCase()); // fxy
