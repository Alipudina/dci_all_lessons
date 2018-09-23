// this part is made in library and today and yesterday i was absent.

// printing the numbers from 1 to 100 to console.
for (var i = 1; i <= 100; i++) {
  console.log(i);
}

console.log('=========================================');

var result = 1;
var myNumber = 200;

while (result <= 200) {
  result *=2;

  if (result <= 200) {
    console.log(result);
    result++;
  } else {
    console.log(`if continue it will be bigger than ${myNumber}`);
  }
}

console.log(`=========================================`);

function plus(a, b) {
  return a + b;
}

var adding = plus(4, 6);
console.log(adding);
