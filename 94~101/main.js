// //select
// let addClass = document.getElementsByClassName("classes-to-add")
// let removeClass = document.getElementsByClassName("classes-to-remove")
// let currentElement = document.getElementsByClassName("current")
// let resultClass = document.querySelector(".classes-list").lastElementChild


// //focus on the add
// onload = function(){
//     addClass[0].focus()
// }
// // handel Var
// let result = []
// //add
//     if(resultClass.innerHTML == ""){
//         resultClass.innerHTML = "No classes add"
//     }

// addClass[0].addEventListener("focus",function(){
//     addClass[0].addEventListener("blur",function(){
//         let valueAdd = (addClass[0].value).split(" ")
//         if(addClass[0].value != ""){
//         for(let i = 0;i < valueAdd.length; i++){
//             if(!(currentElement[0].classList.contains(valueAdd[i])) && valueAdd[i] != ''){
//                 currentElement[0].classList.add(valueAdd[i].toLowerCase())
//                 if(resultClass.innerHTML != ""){
//                     if(resultClass.innerHTML == "No classes add"){
//                         resultClass.innerHTML = ""
//                     }
//                     resultClass.innerHTML += `<span>${valueAdd[i].toLowerCase()}</span>`
//                 }
//                         result.push(valueAdd[i].toLowerCase()) 
//                         console.log(result)
//             }
//         }
//         addClass[0].value = ""
//     }
// })
// })


// //remove

// removeClass[0].addEventListener("focus",function(){
//     removeClass[0].addEventListener("blur",function(){
//         let valueRemove = (removeClass[0].value).split(" ")
//         if(removeClass[0].value != ""){
//             for(let i = 0;i < valueRemove.length; i++){   
//                 if(valueRemove[i] != ''){
//                     currentElement[0].classList.remove(valueRemove[i].toLowerCase())
//                     resultClass.removeChild(resultClass.childNodes[result.indexOf(valueRemove[i].toLowerCase())])
//                     result.splice(result.indexOf(valueRemove[i].toLowerCase()),1)
//                     removeClass[0].value = ""
//                 }
//         }
//         console.log(result)
//         if(resultClass.innerHTML == ""){
//             resultClass.innerHTML = "No classes add"
//         }
//         }
//     })
// })


// let removeP = document.getElementsByTagName("p")
// let divAB = document.getElementsByClassName("our-element")
// let textAfter = document.createElement("div")
// let textBefore = document.createElement("div")


// textAfter.innerHTML = "End"
// textAfter.setAttribute("class","end")
// textAfter.setAttribute("title","End Element")
// textAfter.setAttribute("data-value","End")

// textBefore.innerHTML = "Start"
// textBefore.setAttribute("class","start")
// textBefore.setAttribute("title","Start Element")
// textBefore.setAttribute("data-value","Start")

// removeP[0].remove()


// divAB[0].before(textBefore)

// divAB[0].after(textAfter)



// let selectDiv = document.querySelector("div") 


// console.log(selectDiv.lastChild)


// let elements = document.querySelectorAll("body *")

// elements.forEach(function(ele,i,arr){
//     elements[i].addEventListener("click",function(){
//         console.log(elements[i].nodeName)
//     })
// })