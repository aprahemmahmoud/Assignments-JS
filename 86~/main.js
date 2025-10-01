// let getId = document.getElementById("elzero").innerHTML = "<h1>Hello from js </h1>";
// let getTagName = document.getElementsByTagName("div")
// let getClassName = document.getElementsByClassName("element")
// let getName = document.getElementsByName("js")
// let getByQuery_1 = document.querySelector("#elzero")
// let getByQuery_2 = document.querySelector(".element")
// let getByQuery_3 = document.querySelector("div[name='js']").innerHTML = "<p>DOM</p>"
// let getByQuery_4 = document.querySelector("div")
// let getByQueryAll_1 = document.querySelector("#elzero")
// let getByQueryAll_2 = document.querySelector(".element")
// let getByQueryAll_3 = document.querySelector("div[name='js']").innerHTML = "<p>DOM</p>"
// let getByQueryAll_4 = document.querySelector("div")

// for(let i=0;i< document.images.length;i++){
// document.images[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
// document.images[i].alt = "ElzeroLogo"
// }


// let myProd = document.createElement("div")
// myProd.setAttribute("class","product")

// const element = "<h3>Main product</h3> <p>Hello world</p>"

// console.log(myProd)

// let title = document.createElement("h3")
// title = document.createTextNode("Main product")
// title.textContent("Main product")

// let paragraph = document.createElement("p")
// paragraph = document.createTextNode("Hello world")

// myProd.appendChild(title)
// myProd.appendChild(paragraph)

// for(let i=0;i<100;i++){
// myProd.innerHTML += element
// }

// document.body.appendChild(myProd)



// document.getElementById("btn").onclick = function(){
//     console.log('Hello world')
// }


// let inputCalc = document.getElementsByName("dollar")
// let resultValue = document.getElementsByClassName("result")


// inputCalc[0].onkeyup = function(){
//     resultValue[0].textContent = `{${inputCalc[0].value}} USD Dollar = {${(inputCalc[0].value*15.6).toFixed(2)}} Egyptian Pound`
// }

// inputCalc[0].onclick = function(){
//     resultValue[0].textContent = `{${inputCalc[0].value}} USD Dollar = {${(inputCalc[0].value*15.6).toFixed(2)}} Egyptian Pound`
// }




// let one = document.getElementsByClassName("one")
// let two = document.getElementsByClassName("two")

// console.log(one[0].getAttribute("class"))

// if(one[0].getAttribute("class") != one[0].textContent){
//     one[0].textContent = one[0].className
//     one[0].setAttribute("title",one[0].className)
// }

// if(two[0].getAttribute("class") != two[0].textContent){
//     two[0].textContent = two[0].className +" "+ document.getElementsByTagName("div").length
//     two[0].setAttribute("title",two[0].className)
// }




// let imgS = document.images

// for(let i=0;i<imgS.length;i++){
//     if(imgS[i].hasAttribute("alt")){
//         imgS[i].setAttribute("alt","old")
//     }else{
//         imgS[i].setAttribute("alt","Elzero New")
//     }
// }


let numCont = document.getElementsByName("elements")
let texts = document.getElementsByName("texts")
let option = document.getElementsByName("type")
let btnCreate = document.getElementsByName("create")
let result = document.getElementsByClassName("results")

//Create
let contentText = "";
btnCreate[0].onclick = function(){
    for(let i = 0;i < numCont[0].value;i++){
        contentText += `<${option[0].value} class="box" title="Element" id="id-${i+1}">${texts[0].value}</${option[0].value}>`
    }
    result[0].innerHTML = contentText
}


