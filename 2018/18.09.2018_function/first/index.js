// let factorial = function(num) {
//      let result = 1;
//      for (let i = 1; i <= num; i++) {
//       result *= i;
//     }
//     return result;
// }
//  let calculateCombinations = function(x, y) {
//   let totalCombinations = 0;
//   for (let i = y; i <= x; i++) {
//      totalCombinations += factorial(x) / (factorial(i) * factorial(x - i));
//   }
//   return totalCombinations;
// }
//  console.log(calculateCombinations(5, 3));



  let factorial = function(num) {
       let result = 1;
       for (let i = 1; i <= num; i++) {
        result *= i;
      }
      return result;
  }
   let calculateCombinations = function(x, y) {
    let totalCombinations = 0;
    for (let i = y; i <= x; i++) {
       totalCombinations += factorial(x) / (factorial(i) * factorial(x - i));
    }
    return totalCombinations;
  }


// how much money should we pay for each bet
  let possibility = function(money, first, second) {
    return money / calculateCombinations(first, second);
  }

  console.log(possibility(30, 3, 2));

console.log('=====================================================');


// Imediately Invoked Functions Expressions = (IIFE's)
  let myFunction = (function(language) {
    return `Hello ${language}`;
  })('ruby');

  console.log(myFunction);

  console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++');


  // put a text in html files through javascript
  let text = '';
  i = 0;

  while (i <= 10) {
    text += '<br> The number is ' + i;
    i++;
  }
  document.getElementById('first').innerHTML = text;

 console.log('=======================================================');
