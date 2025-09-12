// let start = 10;
// let end = 100;
// let exclude = 40;



// for(let i = start;i <= end; i+=start){
//     if(i === exclude){
//         continue;
//     }
//     console.log(i);
// }
// Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100



// let start = 10;
// let end = 0;
// let stop = 3;


// for(let i=start; i>end ; i--){
//     if(i === start){
//         console.log(i)
//     }else if(i === 3){
//         break;
//     }else if(i < start){
//         console.log(`${end}${i}`)
//     }
// }
// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03


// let start = 1;
// let end = 6;
// let breaker = 2;


// for(let i=start;i<=end;i++){
//     console.log(i)
//     let j = breaker
//     while(j<end){
//         console.log("-- "+j)
//         j += breaker
//     }
// }
// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4




// let index = 10;
// let jump = 2;

// let i = index
// for (;;) {

// if(i === jump){
//     break;

// }else if(i > jump){
//     console.log(i)
// }

// i -= jump
// }
// Output
// 10
// 8
// 6
// 4



// let friends = ["Ahmed", "Sayed","Eman", "Mahmoud", "Ameer", "Osama", "Sameh","ahmed"];
// let letter = "a";

// // console.log()

// for(let j=letter.indexOf("a"),i=letter.indexOf("a"); i < friends.length; i++ ,j++){

// if( friends[i].toUpperCase().startsWith(letter.toUpperCase()) !== true){
// console.log(`${j+1} => ${friends[i]}`)
// }else {
//     j--
// }
// }
// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"

// let start = 0;
// let swappedName = "elZerO";


// console.log(swappedName.length);
// let str=[];
// for(let i = start ; i< swappedName.length; i++){
//     if(swappedName[i] === swappedName[i].toUpperCase()){
//         str[i] = swappedName[i].toLowerCase()
//     }else {
//         str[i] = swappedName[i].toUpperCase()
//     }
// }
// console.log(str.join(""))
// Output
// "ELzERo"




// let start = 0;
// let mix = [1, 2, 3, "A", "B", "C", 4];

// for(let i = start;i < mix.length;){
// ++i
//     if(typeof mix[i] === "number"){
//         console.log(mix[i]);
//     }
// }
// Output
// 2
// 3
// 4


// let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
// let index = 0;
// let counter = 0;
// // console.log(friends[3].toString().toUpperCase().startsWith("A"))

// let i = index;
// while(i < friends.length){

//     if(friends[i].toString().toUpperCase().startsWith("A") === false && typeof friends[i] !== "number"){
//         console.log(`${counter+1} => ${friends[i]}`);
//         counter++
//     }
// i++
// }
// Output
// "1 => Sayed"
// "2 => Mahmoud"

