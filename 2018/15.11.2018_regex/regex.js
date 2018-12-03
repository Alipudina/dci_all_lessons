// let dataComesFromUser = 'jake';
//
// let myRegex = /jake/;
// let myNewRegex = /^jake$/i;
//
// console.log(myRegex.test(dataComesFromUser));


//##################################################
// let sparrow = 'Jack Sparrow';
// let nicholson = 'Jack Nicholson';
//
// let newRegex = /^jack\s(sparrow|nicholson)$/i;
//
// console.log(newRegex.test(nicholson));
// console.log(newRegex.test(sparrow));
//###################################################

let number1 = '0049 1234 1234567';
let number2 = '0049 6758 9876534';
let number3 = '0 6758 9876534';
let email= 'alipudina55@gmail.com';
let email1= 'alipudin$a55@hotmail.de';

let regexNumber = /^(([\d]{4})?|[0])\s([\d]\s?){4}\s([\d]\s?){7}$/i;

console.log(regexNumber.test(number1));
console.log(regexNumber.test(number2));
console.log(regexNumber.test(number3));

let regexEmail = /^.{2,50}[@][a-z]{2,9}[\.](org|com|net)$/i;
// let regexEmail = /^[\w#$%\.]{2,50}@[a-z]{2,9}\.(org|com|net)$/i;

console.log(regexEmail.test(email));
console.log(regexEmail.test(email1));
