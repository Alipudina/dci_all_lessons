
// take a number lower than 10 and print its multiplication
// var num = 5;
// var integer = 1;
//
// while (num  > 0 && num < 10 && integer > 0 && integer <= 10) {
//   var result = num * integer;
//   console.log(result);
//   integer++;
// }
//
// console.log('put another number please');



// printing the multiplication from 1 to 10
function multiplication() {

  for (let x = 1; x <= 10; x++) {

    for (let y = 1; y<= 10; y++) {
      console.log(x * y);
    }
  }


}

multiplication();

console.log('#########################################################################');


let modulo = function(a, b) {
  return a * b;
}

let myFunction = function(c, d, f) {
  return f(c, d);
}

console.log(myFunction(4, 3, modulo));

console.log('===================================================================');


let factorial = function (num) {

  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;

}

console.log(factorial(5));

console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');

let calculateCombination = function(x, y) {
  return  factorial(y) / (factorial(x) * factorial(y - x));
}

console.log(calculateCombination(5, 6));
