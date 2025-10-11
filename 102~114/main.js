// let i = 10

// let cont = setInterval(function(){
//     console.log(i--)
//     if(i === 0){clearInterval(cont)};
// }, 1000);




// let getNum = window.prompt("Print Number From-To","Use two Num like this 1-10")

// getNum = getNum.split("-")

// let count = setInterval(countdown,1000)


// let bigNum 
// let smallNum
//     if(getNum[0] > getNum[1]){
//         smallNum = getNum[1] 
//         bigNum = getNum[0]
//     }else if(getNum[0] < getNum[1]){
//         smallNum = getNum[0]
//         bigNum = getNum[1]
//     }

// function countdown(){
//     console.log(smallNum++)
//     if(smallNum > bigNum){
//         clearInterval(count)
//     }
    

// }


// setTimeout(() => {
//     cont.style.visibility = "visible"
// }, 5000);


// let btn = document.querySelector("button")
// let cont = document.querySelector(".cont")

// btn.addEventListener("click",function(){
//     cont.style.visibility = "hidden"
// })

// let num = document.querySelector("div h2")

// let countDown = function(){
//     num.innerHTML -= 1
//     if(num.innerHTML == 5){
//         btn.style.display = "block"
//         btn.addEventListener("click",function(){
//             window.open("https://elzero.org","","width=400,height=500,left=100,top=20")
//         })
//         clearInterval(count)
//         // window.location.href = "https://Elzero.org"
//     }
// }
// let count = setInterval(countDown,1000)


// width=400,height=500,left=100,top=20


// window.open("https://www.mozilla.org/", "mozillaWindow", "popup");

let familyFont = document.getElementById("Family-Font")
let fontColor = document.getElementById("Colors")
let fontPexcl = document.getElementById("Pexcl")
let text = document.getElementById("text")



//Family
// familyFont.addEventListener("blur",function(event){
//     text.style.fontFamily = event.target.value
//     window.localStorage.familyFont = event.target.value
// })

// if(localStorage.familyFont != ""){
//     text.style.fontFamily = localStorage.familyFont
// }



// //Color
// fontColor.addEventListener("blur",function(event){
//     text.style.color = event.target.value
//     window.localStorage.fontColor = event.target.value
// })

// if(localStorage.fontColor != ""){
//     text.style.color = localStorage.fontColor
// }



// //Pexcl
// for(let i=16;i<=30;i++){
// fontPexcl.innerHTML += `<option value="${i}px">${i}px</option>`
// }

// fontPexcl.addEventListener("blur",function(event){
//     text.style.fontSize = event.target.value
//     window.localStorage.fontPexcl = event.target.value

// })

// if(localStorage.fontPexcl != ""){
//     text.style.fontSize = localStorage.fontPexcl
// }








/////////////////
// let numOp = document.getElementById("nums")
// let input = document.querySelectorAll("input")


// input.forEach(function(el,i){
//     el.addEventListener("keyup",function(){
//         if(el.value != ""){
//         window.sessionStorage.setItem(el.name,el.value)
//         }
//     })
//     if(sessionStorage.getItem(el.name) != undefined){
//         el.value = sessionStorage[el.name]
//     }
    
// })





// //numOp
// for(let i=1;i<=5;i++){
// numOp.innerHTML += `<option value="${i}">${i}</option>`
// }
// numOp.addEventListener("blur",function(el){
//     window.sessionStorage.numOp = numOp.value 
// })

// if(window.sessionStorage.numOp != ""){
//     numOp.value = window.sessionStorage.numOp
// }