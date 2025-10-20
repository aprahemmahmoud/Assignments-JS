let Obj = new WeakMap() //WeakSet() //Map() //Set()


// let mapUser = { theName: "Elzero"}

// let myMap = new Map();

// myMap.set(mapUser,"object Value")

// console.log(myMap)


// console.log(myMap.keys())



// let myArray = [10,20,30,40,'a','b','c']

// myArray.copyWithin(myArray.indexOf(20),myArray.indexOf("b"),myArray.indexOf("c"))

// console.log(myArray)




// let setOfNumbers = new Set([10])
// setOfNumbers.add(20).add(setOfNumbers.size)
// // let myArray = setOfNumbers.keys()
// console.log(setOfNumbers)
// // console.log(myArray.next().value)
// // console.log(myArray.next().value)
// setOfNumbers.forEach(function(el){
//   if(el == 2){
//     console.log(el)
//   } 
// })

// Needed Output
// Set(3) {10, 20, 2}



// let letters = "abcd"
// let myAry = Array.from(letters)
// let myObj = new Map()
// for(let i=0 ;i < letters.length;i++){
//   myObj.set(myAry[i],i+1)
// }
// console.log(myObj)


// let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
// let myArray = new Set(myFriends)

// console.log([...myArray].sort())


// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']


// let myInfo = {
//   username: "Osama",
//   role: "Admin",
//   country: "Egypt",
// };

// let mapObj = new Map()
// for(let i =0 ;i<Object.keys(myInfo).length;i++){
//   mapObj.set(Object.keys(myInfo)[i],myInfo[Object.keys(myInfo)[i]])
// }

// console.log(mapObj)
// console.log(mapObj.size)
// console.log(mapObj.has("role"))

// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true




// let theNumber = 100020003000;

// let result = new Set( Array.from(theNumber.toString()))
// // console.log(result)
// result.delete('0')

// let num = ''
// result.forEach(function(e,i){
//   num += e
//   return i == (result.size) ? console.log(num): "";
// })

// console.log(result)


// Needed Output
// 123



// let theName = "Elzero";

// //1
//   console.log(Array.from(theName))
// //2
//   console.log([...theName])
// //3
//   console.log(theName.split(""))
// //4
// function arry(name){
// return [...name]
// }
//   console.log(arry(theName))
// //5
// let result = [] 
// for(let i =0;i<theName.length;i++){
//   result.push(theName[i])
// }
// console.log(result)

// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']




// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// let chars = ["Z", "Y", "A", "D", "E", 10, 1];

// let result = []
// let newArray = []
// for(let i=0 ; i<chars.length;i++){
//   if( typeof chars[i] === 'number'){
//     result.push(chars[i])
//   }else{
//     newArray.push(chars[i])
//   }
// }

// let conAry = [...result,...newArray]


// conAry.copyWithin(0,result.length)

// console.log(conAry)
// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']




// let numsOne = [1, 2, 3];
// let numsTwo = [4, 5, 6];

// let allArray = []
//1
// let allArray = [...numsOne,...numsTwo]
//2
// allArray.push(...numsOne,...numsTwo)
//3
// allArray = numsOne.concat(numsTwo)


// console.log(allArray)

// Needed Output
// [1, 2, 3, 4, 5, 6]



// let n1 = [10, 30, 10, 20];
// let n2 = [30, 20, 10];

// // let 
// function nuberCont(){
//   let [n10,,,] = n1
//   return console.log([n1,n2].length +""+n10)
// }nuberCont()



// Needed Output
// 210