// console.log(100 == "100"); // true
// console.log(100 != 1000); // true
// console.log(110 > 100 && 10 < 20); // true
// console.log(-10 == "-10"); // true
// console.log(typeof -50 == typeof +"-40"); // true
// console.log(typeof 10 == typeof -"-40"); // true
// console.log(!("10" == -10)); // true
// console.log(!(20 < false)); // true



// let num1 = 10;
// let num2 = 20;

// console.log(typeof num1 == typeof num2); // true
// console.log( num1 < num2); // true
// console.log(num1 != num2); // true
// console.log(num1 !== num2); // true
// console.log( !(num1 == num2)); // true
// console.log( Number.isInteger(num1 + num2)); // true



// let a = 20;
// let b = 30;
// let c = 10;

// console.log(a != b && a != c || a < b); // true
// console.log(a - b != a - c); // true
// console.log(!(a > b) && !(a == b) && !(a == c) && !(a < c)); // true



// Test Case 1
// let num = 9; // "009"

// // Test Case 2
// let num = 20; // "020"

// // Test Case 3
// let num = 110; // "110"

// if(10 > num){
//     console.log("009")
// }else if(10<num && 100>num){
//     console.log("020")
// }else if(num >= 100) {
//     console.log("110")
// }




// let num1 = 9;
// let str = "9";
// let str2 = "20";

// if(num1 == str){
//     console.log(`${num1} Is The Same Value As ${str}`)
//     if(num1 == str && typeof(num1) != typeof(str)){
//         console.log(`${num1} Is The Same Value As ${str} But Not The Same Type`)
//         if(num1 !== str2){
//             console.log(`${num1} Is Not The Same Value Or The Same Type As ${str2}`)
//             if(typeof(str) == typeof(str2)){
//                 console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`)
//             }
//         }
//     }
// }





// let num1 = 10;
// let num2 = 30;
// let num3 = "30";

// if(num3 > num1 && typeof num3 != typeof num1 && num3 == num2 &&typeof num3 != typeof num2 && num3 !== num1 && typeof num3 != typeof num2){
//     console.log(`"30 Is Larger Than 10 And Type string Not The Same Type As number"
// "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
// "${num3} Value And Type Is Not The Same As ${num1} And Type Is Not The Same As ${num2}"`)

// }




// // Edit What You Want Here

// let num1 = 11;
// let num2 = 10;
// let num3 = 11;
// let num4 = 33;

// /*
//   Do Not Edit Below This Line
//   Needed Output
//   True 7 Times
// */

// // Condition 1

// if (num1 > num2) {
//   console.log("True");
// } else {    
//   console.log("False");
// }

// // Condition 2

// if (num1 > num2 && num1 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 3

// if (num1 > num2 && num1 === num3) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 4

// if ((num1 + num2) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 5

// if ((num1 + num3) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 6

// if ((num1 + num2 + num3) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 7

// if (num4 - (num1 + num3) + num2 === 21) {
//   console.log("True");
// } else {
//   console.log("False");
// }




let day = "   friday  ";

        

// You Need To Remove Spaces And Make First Letter Capital => Friday
// day = "Friday";
// day = "Saturday";
// day = "Sunday";


// Output => "No Appointments Available"

// day = "Monday";
// day = "Thursday";


// Output => "From 10:00 AM To 5:00 PM"

// day = "Tuesday";
// Output => "From 10:00 AM To 6:00 PM"

// day = "Wednesday";
// Output => "From 10:00 AM To 7:00 PM"

// day = "World";
// Output => "Its Not A Valid Day"

day = day.trim();
        day = day[0].toUpperCase() + day.slice(1,(day.length));
        console.log(day);
switch(day){
    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log("No Appointments Availabe");
    break;
    case "Monday":
    case "Thursday":
    console.log("From 10:00 AM To 5:00 PM");
    break;
    case "Tuesday":
        console.log("From 10:00 AM To 6:00 PM");
        break;
    case "Wednesday":
        console.log("From 10:00 AM To 7:00 PM");
        break;
    case "World":
        console.log("Its Not A Valid Day");
}