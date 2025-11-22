// let myPromise = new Promise(function(onfull,onrej){
//   let conation = false
//   if(conation){
//     onfull("the process is true");
//   }else{
//     onrej(Error("the process is false"))
//   }
// }).then((trueValue)=>console.log(`done ${trueValue}`)).catch((falseValue)=>console.log(`${falseValue}`))









// let getData = function(api){
//   return new Promise(function(resolve,reject){
//     let myReq = new XMLHttpRequest()
//       myReq.onload = function(){
//         if(myReq.readyState == 4 && myReq.status == 200){
//           resolve(JSON.parse(myReq.response))
//         }else(
//           reject(Error("Data not found"))
//         )
//       }
//       myReq.open("get",api)
//       myReq.send()
//   })
// }

// getData("./file.json").then(function(resolve){
//     resolve.length = 1
//     return resolve 
//   }).then(function(resolve){
//     console.log(resolve[0].title)
//   }).catch((reject)=>{
//     console.log(reject)
//   })


// fetch("./file.json").then(function(result){
//   // console.log(result)
//   let data = result.json()
//   return data
// }).then(function(data){
//   console.log(data[0].id)
// })





// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Iam The Good Promise");
//   }, 0);
// });

// readData();

// "https://api.github.com/users/elzerowebschool/repos"


// let api = fetch("https://api.github.com/users/elzerowebschool/repos")

// async function getData(api){
//   let users = ["adoo"]
//   if(api != ""){
//     return fetch(api)
//   }else{
//     return new Error("no data found")
//   }


// }


// getData("./file.json")
// .then((data)=>{
//   fulData = data.json()
//   return fulData
// }).then((Data)=>{
//   Data.length = 5
//   return Data
// })
// .then((data)=>console.log(data[1].title))

  






















/*
  <div>
    <h3>article title number 1</h3>
    <p>article Description number 1</p>
  <div>
*/


// function getData(api){
//   return new Promise(function(res,rej){
//     let myReq = new XMLHttpRequest()
//         myReq.open("get",api)
//         myReq.send()
//     myReq.onload = function(){
//       if(myReq.readyState == 4 && myReq.status == 200){
//         res(JSON.parse(myReq.response))
//       }else{
//         rej(Error("no data found"))
//       }
//     }
//   })
// }


// async function getData(api){
//   try{
//     let data = (await fetch(api)).json()
//     let result = await data
//     return result
//   }catch(rej){
//     console.log(rej)
//   }
// }
    

// getData("./file.json")

// function getData(api){
//   return fetch(api).then(function(result){
//     return result.json()
//   })
// }


// getData("./file.jsn")
//   .then((data)=>{
//     data.length = 5
//     return data
//   }).then(function(result){
//     let div = document.createElement("div")
//     for(let i= 0;i<result.length;i++){
//       let h3 = document.createElement("h3")
//       let p = document.createElement("p")

//       h3.textContent =result[i].title
//       p.textContent=result[i].description
      
//       div.append(h3)
//       div.append(p)
      
//       document.body.append(div)

//   //   div.innerHTML += `<div>
//   //   <h3>article title number 1</h3>
//   //   <p>article Description number 1</p>
//   // <div>`
//     }
//     document.body.append(div)
//   })
//   .catch((error)=>console.log(error))







