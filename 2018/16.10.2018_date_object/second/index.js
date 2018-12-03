
/* writing numbers from 60 to 0 in one minute */
let counter = 60;
let numbers = setInterval(function() {
  console.log(counter);
  counter--;
  if (counter === 0) {
    console.log('Game Over');
    clearInterval(numbers);
  }
}, 1000)



/* asynchronous programing ==> setTimeout() and setInterval() */
let count = 0;
let msg = 'Hello timeout';

let showMessage = setTimeout(function() {
  count++;
}, 3000)

console.log(count);
