const operation = (a, b) => {

 if (typeof a !== 'number' || typeof b !== 'number') {
   return 'Sorry, the operation is not possible!';
 } else if (a < 0) {
   return Math.abs(a) * b;
 }

 return a + b;
}

 const fizzBuzz = num => {

  if (typeof num !== 'number') {
    return 'The number you provided is not a number';
  } else if (num <= 0) {
    return 'The number you provided is either 0 or negative. You shall not pass!';
  } else if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz';
  } else if (num % 3 === 0) {
    return 'Fizz';
  } else if (num % 5 === 0) {
    return 'Buzz';
  } else {
    return num;
  }

}


 const factorial = num => {
  let result = 1;
  if (typeof num !== 'number') {
    return 'The input you entered is not a number! You get no factorial!';
  } else if (num < 0) {
    return 'Impossible to present factorial of a negative number';
  } else if (num === 0) {
    return 1;
  } else {
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  }
}

console.log(operation(2,5));
