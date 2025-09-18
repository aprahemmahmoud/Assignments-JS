// let mix = "A13BS2ZX"



// let addNum = mix.split("").filter(function(elemnt){
//     return !isNaN(elemnt * 1) ;
// }).map(function(ele,index,arr){
//     console.log(ele * ele)
//     // console.log(index)
//     console.log(arr)
// })

// console.log(addNum)
// console.log(mix)




// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// // Elzero

// let letterCon = mix.map(function(ele){
//     return isNaN(ele * 1) ? ele : "";
// }).reduce(function(acc,cur){
//     return acc + cur
// })

// console.log(letterCon)



// let myString = "EElllzzzzzzzeroo";

// let letterCon = myString.split("").filter(function(ele,i){
// return myString.indexOf(ele) == i ;
// }).reduce(function(acc,ele){
//     return acc + ele
// })
// console.log(letterCon)

// Elzero


// let myArray = ["E", "l", "z", ["e", "r"], "o"];

// let letter = myArray.reduce(function(acc,ele,i,arr){
//     return arr.filter(function(el,i,ar){
//         arr.slice(arr.length-1,arr.length) 
//         return !Array.isArray(el)
//     })
//     .reduce(function(acc,ele){
//     return acc + ele
//     })
//     + arr.filter(function(el,index,arry){
//         return Array.isArray(el)
//     })
//     .reduce(function(acc,ele){
//         return acc + ele
//     })
//     .reduce(function(acc,ele){
//         return acc + ele 
//     }) + myArray[myArray.length - 1]
    
// })

// console.log(letter)

// Elzero



// let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// let num = numsAndStrings.filter(function(ele){
//     return typeof ele === "number"
// }).map(function(ele){
//     return -ele
// })

// console.log(num)

// // [-1, -10, 10, 20, -5, -3]





// let nums = [2, 12, 11, 5, 10, 1, 99];

// let numCon = nums.reduce(function(acc,ele){
//     return  ele % 2 === 0 ? acc * ele : acc + ele;  
// })
// console.log(numCon)
// 500