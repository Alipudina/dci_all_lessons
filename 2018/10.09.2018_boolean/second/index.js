// print the numbers from -500 to 500
// var num = -500;
//
// while (num <= 500) {
//   console.log(num);
//   num++;
// }


var maxWeight = 10000;
var numOfContainer = 500;
var weightIncluded = 0;
var id = 1;
var weightNextContainer = 10;
var ignoreContainer = 0;

while (maxWeight >= weightIncluded + weightNextContainer) {
  if (id <= 100){
      if (id >= 61 && id <= 70) {
        id++;
        ignoreContainer++;
        continue;
      }
    weightIncluded +=10;
    weightNextContainer = 10;
  } else if (id <= 200) {
    weightIncluded += 20;
    weightNextContainer = 20;
  } else if (id <= 250) {
    weightIncluded += 50;
    weightNextContainer = 50;
  } else if (id <= 300) {
    weightIncluded += 100;
    weightNextContainer = 100;
  } else if (id <= 400) {
    weightIncluded += 200;
    weightNextContainer = 200;
} else {
  weightIncluded += 500;
  weightNextContainer = 500;
}

id++;

}

console.log(`I have included ${id - ignoreContainer - 1} containers tothe ship and the weight remainded is ${maxWeight - weightIncluded}`);





// FizzBuzz
var currentNum = 1;
var endNum = 100;
while (currentNum <= endNum) {

  if (currentNum % 3 === 0 && currentNum % 5 === 0) {
    console.log(`FizzBuzz`)
  } else if (currentNum % 5 === 0) {
    console.log('Buzz')
  } else if (currentNum % 3 === 0) {
    console.log(`Fizz`)
  } else {
    console.log(`${currentNum}`)
  }
  currentNum++;
}





// multiplication table
var num = 5;

 while (num <= 50) {
   console.log(num);
   num += 5;
 }



// pay the employees problem
