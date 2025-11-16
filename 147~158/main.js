// // create class and add privet pro and Mat in it and try inherit from it.

// class MyClass{
//   #name
//   constructor(name,age,country){
//     this.#name = name || "unknown"
//     this.age = age
//     this.country = country
//   }
//   massage(){
//     return `My Name Is ${this.#name}, My Age Is ${this.age}, I Live in ${this.country}`
//   }
// }

// let myObj = new MyClass("",38,"Egypt")

// console.log(myObj.massage())

// class MyChild extends MyClass{
//   #name
//   constructor(name,age,country){
//     super(name,age,country)
//   }
//   // massage(){
//   //   return `My Name Is ${this.name}, My Age Is ${this.age}, I Live in ${this.country}`
//   // }
// }

// // console.log(MyChild.massage())

// let myChild = new MyChild("Hema",38,"Egypt")

// console.log(myChild.massage())

// console.log(myChild.country)



// function Car(name, model, price) {
//   this.n = name;
//   this.m = model;
//   this.p = price;
// }

// class Car{
//   constructor(name, model, price) {
//     this.n = name;
//     this.m = model;
//     this.p = price;
//   }
//   massage(){
//     return `Car Name Is ${this.n} And Model Is ${this.m} And Price Is ${this.p}`
//   }

//   run(){
//     return `Car Is Running Now`
//   }
//   stop(){
//     return `Car Is Stopped Now`
//   }
// }

// let myCar1 = new Car("MG", 2022, 420000);
// let myCar2 = new Car("MA", 2023, 520000);
// let myCar3 = new Car("M4", 2024, 720000);

// console.log(`Car Name Is ${myCar1.n} And Model Is ${myCar1.m} And Price Is ${myCar1.p}`);
// console.log(myCar1.massage());
// console.log(myCar1.run());

// Needed Output

// "Car One Name Is MG And Model Is 2022 And Price Is 420000"
// "Car Is Running Now"




// class Phone {
//   constructor(name, serial, price) {
//     this.name = name;
//     this.serial = serial;
//     this.price = price;
//   }
// }

// // Write Tablet Class Here
// class Tablet extends Phone{
//   constructor(name,serial,price,size){
//     super(name,serial,price)
//     this.size = size || "unknown"
//   }
//   fullDetails(){
//     return `${this.name} Serial is ${this.serial} And Size Is ${this.size}`
//   }
// }


// let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
// let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
// let TabletThree = new Tablet("LG", 250450650, 650);

// console.log(`${TabletOne.fullDetails()}`);
// // iPad Serial is 100200300 And Size Is 12.9

// console.log(`${TabletTwo.fullDetails()}`);
// // Nokia Serial is 350450650 And Size Is 10.5

// console.log(`${TabletThree.fullDetails()}`);
// // LG Serial is 250450650 And Size Is Unknown



// Edit The Class
// class User {
//   #c = "";
//   constructor(username, card) {
//     this.u = username;
//     this.#c = card.toString();
//     this.showData = `Hello ${this.u} Your Credit Card Number Is ${this.action()} ` 
//   }

//   action(){
//     let dataStr = this.#c
//     // console.log(data.length / 4)
//     let data = [...dataStr]
//     for(let i=0;i<data.length;){
//       i+=4
//       if(data[i] != '-'){
//         if( i !== data.length){
//           data.splice(i,0,"-")
//         }
//       }
//       i+=1
//     }
//     return data.join("")
//   }
// }

//  let dataStr = "1234-5678-1234-5678"
//     // console.log(data.length / 4)
//     let data = [...dataStr]
//     for(let i=0;i<data.length;){
//       i+=4
//       if(data[i] != '-'){
//         if( i !== data.length){
//           data.splice(i,0,"-")
//         }
//       }
//       i+=1
//       console.log(data[i])
//     }
//     console.log(data.join(""))


// Do Not Edit Anything Below

// let userOne = new User("Osama", "1234-5678-1234-5678");
// let userTwo = new User("Ahmed", "1234567812345678");
// let userThree = new User("Ghareeb", 1234567812345678);

// // console.log(userTwo.action())


// console.log(userOne.showData);
// // Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

// console.log(userTwo.showData);
// // Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

// console.log(userThree.showData);
// // Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

// console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined


// function formatCreditCard(number) {
//   // إزالة أي مسافات أو أحرف غير أرقام أولاً
//   let cleanNumber = number.replace(/\D/g, '');
  
//   // التنسيق: أضف مسافة كل 4 أرقام
//   let formatted = cleanNumber.replace(/(\d{4})(?=\d)/g, '$1-');
  
//   return formatted;
// }

// console.log(formatCreditCard('1234567892342#$#  0123456')); 
// console.log(formatCreditCard('1234-5678-9012-34562323')); 



// Write Your Code Here
// String.prototype.addLove = function(){
//   return `I Love ${this} web School`
// }

// // Do Not Edit Below
// let myStr = "Elzero";
// console.log(myStr.addLove()); // I Love Elzero Web School




const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};

// Write Your Code Here

// Object.defineProperties(myObj,{
//   score:{
//     value:1000,
//     writable:false,
//     configurable:true
//   },
//   country:{
//     value:1000,
//     enumerable:false,
//     configurable:true,
//     writable:false
//   },
//   id:{
//     value:100,
//     enumerable:false,
//     configurable:true
//   }
// })

// myObj.score = 500;

// for (let prop in myObj) {
//   console.log(`${prop} => ${myObj[prop]}`);
// }

// delete myObj.country

// console.log(myObj);

// Needed Output

// "username => Elzero"
// "score => 1000"
// {username: 'Elzero', score: 1000, id: 100}


