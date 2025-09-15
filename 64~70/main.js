
// function getDetails(Name="Hema mha", Age = "", Country = "un") {
    
//     function namePattern() {
//     let  result = Name.split(" ");
//     return `${result[0]} ${result[1][0].toUpperCase()}.`
//     }

//     function ageWithMessage() {
//         let result = Age.split(" ") 
//         return `Your Age Is ${Number(result[0])} `
//     }

//     function countryTwoLetters() {
//         let result = Country.slice(0,2)
//         return `You Live in ${result}`;
//     }

//     function fullDetails() {
//         return `${namePattern()}, ${ageWithMessage()}, ${countryTwoLetters()}`
//     }
    
//     return fullDetails();        
// }

// console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// // Hello Osama M., Your Age Is 38, You Live In EG

// console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY


// let itsMe = () =>  `Iam A Normal Function`;


// console.log(itsMe()); // Iam A Normal Function

// let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;


// console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org


// let checker = (zName) =>  (status) => (salary) => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;


// console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
// console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble


// function specialMix(...data) {
//     let result = 0;
//     for(let i =0;i < data.length ; i++){
//         data[i] = parseInt(data[i])

//         if( !isNaN(data[i])){
//             result += data[i]
//         }
//     }
//         if(result == 0){
//             result = "All is strings"
//         }
//     return  result;
// }

// // console.log(parseInt("sdfdas"))

// console.log(specialMix(10, 20, 30)); // 60
// console.log(specialMix("10Test", "Testing", "20Cool")); // 30
// console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
// console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

