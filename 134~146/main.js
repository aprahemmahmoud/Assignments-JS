




// let myString = "AaBbcdefG123!234%^&*";

// let aToz = /[a-z]/g;
// let notaToz = /[^a-z]/g;

// let AToZ = /[A-Z]/g;
// let notAToZ = /[^A-Z]/g;

// let allStr = /[^a-z0-9]/ig;

// console.log(myString.match(allStr));



// let email = 'O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com';
// // let dot = /./g;
// let word = /[\w]/gi;
// let valid = /\w@\w.(net|com|org)/ig;
// // console.log(email.match(dot));
// // console.log(email.match(word));
// console.log(email.match(valid));


// let nums = "0110 10 150 05120 0560 350 00";
// let urls = "https://google.com http://www.website.net web.com";


// console.log(urls.match(/(http:\/\/|https:\/\/)?(www.)?\w+.(com|net)/ig))



// let serials = "S100S S3000S S50000S S950000S";

// console.log(serials.match(/S\d{3,}S/ig))


// let txt = "We Love Programming And @ Because @ Is Amazing";

// console.log(txt.replace(/@/, "Love"));




// let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

// // let reg = /\d{4}:.{3}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/
// let reg = /\d{4}:.{3}:(\d{4}(:)?)+/


// console.log(ip.match(reg))



// let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

// console.log(specialNames.match(/os\d*o/ig))

// Output
// ['Os10O', 'OsO', 'Os100O']


let phone = "+(995)-123 (4567)";

console.log(phone.match(/\+\(\d{3}\)-\d{3}\s\(\d{4}\)/ig))

// console.log(phone.replace(/\+\(\d{3}\)-(\d{3})\s(\(\d{4})\)/ig,))


let reg = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

//https? موجود ولا مش موجود
//



let word = "abababab"

console.log(word.match(/(?:ab)+/));  
console.log(word.match(/(ab)+/)); 





let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re = /s/;

console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"




// let url1 = 'elzero.org';
// let url2 = 'http://elzero.org';
// let url3 = 'https://elzero.org';
// let url4 = 'https://www.elzero.org';
// let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

// let rage = //; // Write Your Pattern Here

// console.log(url1.match(rage));
// console.log(url2.match(rege));
// console.log(url3.match(rege));
// console.log(url4.match(rege));
// console.log(url5.match(rege));