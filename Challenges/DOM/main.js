/*
  DOM [Create Elements]
  - Practice Product With Heading And Paragraph
*/




// for(let i =0 ;i<100;i++){
//   let myMainElement = document.createElement("div");
//   let myHeading = document.createElement("h2");
//   let myParagraph = document.createElement("p");
//   let myHeadingText = document.createTextNode("Product Title");
//   let myParagraphText = document.createTextNode("Product Description");
//   myHeading.appendChild(myHeadingText);

// // Add Heading To Main Element
// myMainElement.appendChild(myHeading);

// // Add Paragraph Text
// myParagraph.appendChild(myParagraphText);

// // Add Paragraph To Main Element
// myMainElement.appendChild(myParagraph);

// myMainElement.className = "product";

// document.body.appendChild(myMainElement);
// }


// const parentElement = document.getElementById('myList');

// const items = ['1', '2', '3', '4'];


// // items.forEach(item => {
    
// //     const li = document.createElement('li');
    
// //     li.textContent = item;
    
// //     parentElement.appendChild(li);
// // });

// for(let i=0;i<items.length;i++){
//     const li = document.createElement('li');
//     li.textContent = items[i];
//     parentElement.appendChild(li);
// }


//////////////////////////////////////////////////

//Navbar
let nav = document.createElement("nav")
let h1 = document.createElement("h1")
let ul = document.createElement("ul")

nav.style.display = "flex"
nav.style.justifyContent = "space-between"
nav.style.alignItems = "center"
// nav.style.borderBottom = "3px black solid"
nav.style.padding = "10px"   
//h1
let textH1 = document.createTextNode("Elzero")
h1.appendChild(textH1)
nav.appendChild(h1).style.color = "green"
//ul li
ul.innerHTML = `<li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Contact</li>`
ul.style.color = "gray"   
ul.style.listStyle = "none"
ul.style.display = "flex"   
ul.style.gap = "10px"   
ul.style.cursor = "pointer"
nav.appendChild(ul)

document.body.appendChild(nav)




//main


let main = document.createElement("main")

main.style.display = "grid"
main.style.gridTemplateColumns = "repeat(3,1fr)"
main.style.gap = "10px"
main.style.backgroundColor = "#CCC"
main.style.padding = "10px"
for(let i =0;i < 15;i++){
let div = document.createElement("div")
let p = document.createElement("p")

p.innerText = "Product"
div.innerHTML = `<h1>${i+1}</h1>`
div.appendChild(p)
main.appendChild(div)

div.style.display = "flex"
div.style.justifyContent = "center"
div.style.alignItems = "center"
div.style.flexDirection = "column"
div.style.backgroundColor = "white"

document.body.appendChild(main)
}


//footer
let footer = document.createElement("footer")
footer.innerHTML = "<h3>Copyright 2025 Made By HEMA</h3>"
footer.style.color = "white"
footer.style.backgroundColor = "green"
footer.style.textAlign = "center"
footer.style.padding = "10px"

document.body.appendChild(footer)