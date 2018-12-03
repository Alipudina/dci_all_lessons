
// Ecma Script6

// function expression
let factorial = function(num = 10) {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(3));
console.log(factorial(5));


// arrow function
let arrow = () => {}



// square root
// let square = num => Math.sqrt(num);
let square = (num = 9) => Math.sqrt(num);

let result = square(25);

console.log(result);



// multiple test
let multiple = (a, b) => {
  let answer;
  (a % b === 0) ? answer = true : answer = 'sorry not dividible';
  return answer;
}

let myResult = multiple(34, 3);

console.log(myResult);




// click button and log the type of event
let btn = document.querySelector('button');

btn.addEventListener('click', ev => {
  console.log(ev.type);
})
