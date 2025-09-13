// function sayHello(theName, theGender) {
//     if(theGender === "Male"){
//         console.log(`Hello Mr ${theName}`)
//     }else if(theGender === "Female"){
//         console.log(`Hello Ms ${theName}`)
//     }else{
//         console.log(`Hello ${theName}`)
//     }
// }

// // Needed Output
// sayHello("Osama", "Male"); // "Hello Mr Osama"
// sayHello("Eman", "Female"); // "Hello Miss Eman"
// sayHello("Sameh"); // "Hello Sameh"






// function calculate(firstNum, secondNum, operation) {
//     let resalt = 0;
//     if(secondNum === undefined){
//         console.log(`Second Number not found`)
//     }else if(typeof firstNum === "number" && typeof secondNum === "number" && operation === "subtract"){
//         console.log(firstNum - secondNum);
//     }else if(typeof firstNum === "number" && typeof secondNum === "number" && operation === "multiply"){
//         console.log(firstNum * secondNum);
//     }else if(typeof firstNum === "number" && typeof secondNum === "number" || operation === "add"){
//         console.log(firstNum + secondNum);
//     }
// }

// // Needed Output
// calculate(20); // Second Number Not Found
// calculate(20, 30); // 50
// calculate(20, 30, 'add'); // 50
// calculate(20, 30, 'subtract'); // -10
// calculate(20, 30, 'multiply'); // 600


// function ageInTime(theAge) {
//     if(theAge > 10 && theAge < 100){
//         console.log(`Year:${theAge} 
//                     Month:${theAge * 12}
//                     Week:${theAge * 12 * 4}
//                     Day:${theAge * 12 * 4 * 7 * 24}
//                     Hour:${theAge * 12 * 4 * 7 * 24 * 60}
//                     M:${theAge * 12 * 4 * 7 * 24 * 60 * 60}
//                     S:${theAge * 12 * 4 * 7 * 24 * 60 * 60 * 60}`);
//     }else{
//         console.log(`Age out of Range`);
//     }
// }

// // Needed Output
// ageInTime(110); // Age Out Of Range
// ageInTime(38); // Months Example => 456 Months




// function checkStatus(a , b, c) {
//     let resalt = [a,b,c]

//     // for(let i = 0 ; i < 3 ; i++){
//     //     if(typeof resalt[i] === "string"){

//     //     }
//     // }



//     if(typeof a === 'string'){
//         resalt[0] = a
//     }else if(typeof b === 'string'){
//         resalt[0] = b
//     }else if(typeof c === 'string'){
//         resalt[0] = c
//     }

//     if(typeof a === 'number'){
//         resalt[1] = a
//     }else if(typeof b === 'number'){
//         resalt[1] = b
//     }else if(typeof c === 'number'){
//         resalt[1] = c
//     }

//     if( a === true){
//         resalt[2] = "Available For Hire"
//     }else if( b === true){
//         resalt[2] = "Available For Hire"
//     }else if( c === true){
//         resalt[2] = "Available For Hire"
//     }else{
//         resalt[2] = " Not Available For Hire"
//     }


//     console.log(`Hello ${resalt[0]}, Your Age is ${resalt[1]}, You are ${resalt[2]} `)

// }

// // Needed Output
// checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"




// function createSelectBox(startYear, endYear) {
//     document.write(`<select>`);
//     for(let i = startYear; i <= endYear; i++){
//         document.write(`<option value="${i}">${i}</option>`);
//     }
//     document.write(`</select>`);
// }
// createSelectBox(2000, 2021);




// function multiply(...num){
//     let resalt = 1
//     // console.log(Array.isArray(num))
    
//     // console.log(typeof num[0])

//     for(let i=0;i< num.length;i++){
//         if(typeof num[i] === "number"){
//             resalt = resalt * parseInt(num[i]) 
//         }
//     }
//     console.log(resalt);
// }

// multiply(10, 20); // 200
// multiply("A", 10, 30); // 300
// multiply(100.5, 10, "B"); // 1000

