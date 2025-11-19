// Needed Output

// "JSON Object Content Here"
// "Data Loaded"


// let myReq = new XMLHttpRequest()

// myReq.open("get","./articles.json")
// myReq.send()
//   // console.log(myReq)
//   let mainData, updateData; 
// myReq.onreadystatechange = function(){
//   if(myReq.readyState === 4 && myReq.status === 200){
//     mainData = JSON.parse(myReq.response)
//     // for(let i=0;i<mainData.length;i++){
//     //   mainData[i].category = "All"
//     // }
//     // updateData  = JSON.stringify(mainData);
//     // console.log(updateData)
    
//     let mainDiv = document.createElement('div');
//     mainDiv.setAttribute("id","data")
//     console.log(mainData);
//     for(let i=0;i<mainData.length;i++){
//     let chDiv = document.createElement('div');
//     let h2 = document.createElement('h2');
//     let p1 = document.createElement('p')
//     let p2 = document.createElement('p')
//     let p3 = document.createElement('p')


//     h2.textContent = mainData[i].title
//     p1.textContent = mainData[i].body
//     p2.textContent = mainData[i].category
//     p3.textContent = mainData[i].author

//     chDiv.append(h2)
//     chDiv.append(p1)
//     chDiv.append(p2)
//     chDiv.append(p3)

//     mainDiv.append(chDiv)

//     document.body.append(mainDiv)
//     }
//   }
// }
