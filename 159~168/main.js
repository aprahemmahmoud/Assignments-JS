

// let Bdate = new Date("1985-1-1")
// let date = new Date()

// let result =  date - Bdate

// console.log(`${result}Ms`)
// console.log(`${(result/1000).toFixed(0)}S`)
// console.log(`${(result/1000/60).toFixed(0)}M`)
// console.log(`${(result/1000/60/60).toFixed(0)}H`)
// console.log(`${(result/1000/60/60/24).toFixed(0)}D`)
// console.log(`${(result/1000/60/60/24/31).toFixed(0)}Mon`)
// console.log(`${(result/1000/60/60/24/31/12).toFixed(0)}Y`)


// Needed Output

// "1247939400 Seconds"
// "20798990 Minutes"
// "346650 Hours"
// "14444 Days"
// "481 Months"
// "40 Years"






// let date = new Date("1980-1-1 00:00:00")


// console.log(date.setDate(10))
// console.log(date.setFullYear(0))
// console.log(date.getFullYear())
// date.setHours(0)
// date.setMonth(0)

// date.setSeconds(1)


// console.log(date)

// Needed Output
// "Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"






// function* test(){
//   yield 1;
//   document.body.append("<h1>Hello from Yield 1</h1>")
//   yield 2;
// }

// function* test2(){
//   yield 3;
//   document.body.append("<h1>Hello from Yield 2</h1>")
//   yield 4;
// }

// function* delegate(){
//   yield* test()
//   yield* test2()
//   yield {
//     name:"Ahmed"
//   }
//   yield* 
//   [1,2,3,4,5]
// }

// let Generator = delegate()


// console.log(Generator.next())
// console.log(Generator.next())
// console.log(Generator.next())
// console.log(Generator.next())
// console.log(Generator.next())
// console.log(Generator.next())
// console.log(Generator.next())
// console.log(Generator.next())
// console.log(Generator.next())
// console.log(Generator.return("Done"))
// console.log(Generator.next())



// let map = new Map([
//   [1, "value1"],
//   ["key2", "value2"], 
//   ["key3", "value3"]])



// for(key of map.keys()){
//   console.log(`${key} => ${map.get(key)}`)
// }
// console.log(map)

// console.log(Generator)
// console.log(Generator.next())
// console.log(Generator.next())
// console.log(Generator.next())



// for(let value of Generator){
//   console.log(value)
// }




// let index = 1;
// function* Gene(){
//   // yield 1;
//   // yield 2;
//   // yield 3;
//   while(true){
//     if(index <= 10){
//       yield index++
//     }
//   }
// }

// let Generator = Gene() 

// console.log(Generator.next())
// console.log(Generator.next())
// console.log(Generator.next())
// console.log(Generator.next())
// console.log(Generator.next())
// console.log(Generator.next())
// console.log(Generator.next())
// console.log(Generator.next())





// let date = new Date("2022-04-30 18:13:20")

// console.log(date)
// console.log(date.toLocaleString('default', { weekday: 'long' }))
// date.toLocaleString('default', { month: 'long' })
// console.log(date.getMonth())
// function dateFun(){
// for(let i = 0; i <= 11; i++){
//   if(date.getMonth() === i){
//     return ["january","february","march","april","may","june","july","august","september","october","november","december"][i];
//   }
// }
// }

// console.log(dateFun()) 

// console.log(`Previous Month Is ${dateFun()} And Last Day Is ${date.getDate()}`)


// Needed Output

// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
// "Previous Month Is April And Last Day Is 30"




// let date = new Date("1982-10-25 00:00:00")
// let date = new Date(1982,9,25)
// let date = new Date("1982-10-25T00:00:00")


// console.log(date);

// Needed Output

// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"




// let now = performance.now()
// console.log(now)

// for(let i=0;i<1010000;i++){
//   let p = document.createElement('p')
//   let text = document.createTextNode(i)
//   p.append(text)
//   document.body.append(p)
// }


// let end = performance.now()
// console.log(end)
// let time = end - now


// console.log(time)

// Needed Output

// "Loop Took 1921 Milliseconds."


// Write Your Generator Function Here
// function* gen(){
//   for (let n = 1; true; n++) {
//   let number = 100 * Math.pow(n, 2) - 160 * n + 74; 
//   yield number
// }
// }


// let generator = gen();

// console.log(generator.next()); // {value: 14, done: false}
// console.log(generator.next()); // {value: 154, done: false}
// console.log(generator.next()); // {value: 494, done: false}
// console.log(generator.next()); // {value: 1034, done: false}
// console.log(generator.next()); // {value: 1774, done: false}
// console.log(generator.next()); // {value: 2714, done: false}
// console.log(generator.next()); // {value: 3854, done: false}
// console.log(generator.next()); // {value: 5194, done: false}
// console.log(generator.next()); // {value: 6734, done: false}



// function* genNumbers() {
//   yield* [1, 2, 2, 2, 3, 4, 5];
// }
// function* genLetters() {
//   yield* ["A", "B", "B", "B", "C", "D"];
// }

// // Write Your Generator Function Here
//   let generat =  Array.from(genNumbers());
//   let set = new Set(generat)
//   let arr = Array.from(set)

//   let generat2 =  Array.from(genLetters());
//   let set2 = new Set(generat2)
//   let arr2 = Array.from(set2)
// function* genAll() {
//   yield* arr;
//   yield* arr2;
// }

// let generator = genAll();

// console.log(generator.next()); // {value: 1, done: false}
// console.log(generator.next()); // {value: 2, done: false}
// console.log(generator.next()); // {value: 3, done: false}
// console.log(generator.next()); // {value: 4, done: false}
// console.log(generator.next()); // {value: 5, done: false}
// console.log(generator.next()); // {value: "A", done: false}
// console.log(generator.next()); // {value: "B", done: false}
// console.log(generator.next()); // {value: "C", done: false}
// console.log(generator.next()); // {value: "D", done: false}


// export default function(num1,num2,num3){
//   let result = num1 + num2 + num3
//   return result
// }

