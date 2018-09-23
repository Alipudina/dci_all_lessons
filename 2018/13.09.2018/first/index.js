function add(a, b) {
  return a + b;
}

var addedNumbers = add(10, 20);

function PrintsNumber(num) {
  console.log(num);
}

PrintsNumber(20);
PrintsNumber(addedNumbers);

PrintsNumber(add(200, 50));

console.log(`++++++++++++++++++++++++++++++++++++++++++++++++++++++++`);

// print the num power exp
function square(num, exp) {
  var result = num;
  if (typeof num !== `number` || typeof exp !== 'number') {
    return 'please put a number';
  }

  for (var i = 1; i <= exp; i++) {
    result *= num;
  }

  return result;
}

var myNumber = square(2, 5);
console.log(myNumber);


console.log(`===========================================================`);


var isSuny = false;

if (isSuny) {
  var sunnyMessage = `take your glass`;
} else {
  var badWeatherMessage = `Take an Umbrella`;
}

console.log(badWeatherMessage);


console.log(`***********************************************************`);


// printing the all addedNumbers
// function PrintNums(startNum, endNum) {
//   if (startNum > endNum) {
//     return;
//   }
//   for (let i = startNum; i <= endNum; i++) {
//     console.log(i);
//   }
// }
//
// PrintNums(50, 55);


// second way Recursion
function PrintNums(startNum, endNum) {
  if (startNum > endNum) {
    return;
  }

  console.log(startNum);
  startNum++;
  PrintNums(startNum, endNum);
}

PrintNums(50, 55);


console.log(`++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++`);


var maxWeight = 10000;
var weightIncluded = 0;
var id = 1;
var weightNextContainer = 10;
var ignoredContainers = 0;

while(maxWeight >= weightIncluded + weightNextContainer) {


  if (id <= 100) {
    if (id >= 61 && id <= 70) {
      id++;
      ignoredContainers++;
      continue;
    }
    weightIncluded += 10;
    weightNextContainer = 10;
  } else if (id <= 200) {
    weightIncluded += 20;
    weightNextContainer = 20;
    if (id === 111) {
      id++;
      break;
    }
  } else if (id <= 250)  {
    weightIncluded += 50;
    weightNextContainer = 50;
  } else if (id <= 300){
    weightIncluded += 100;
    weightNextContainer = 100;
  } else if (id <= 400) {
    weightIncluded += 200;
    id === 400 ? weightNextContainer = 500 : weightNextContainer = 200;
  } else {
    weightIncluded += 500;
    weightNextContainer = 500;
  }

  id++;

}

console.log(`I have included ${id - ignoredContainers - 1} containers to the ship and the weight remained is ${maxWeight - weightIncluded}!`);


console.log(`#######################################################`);

// var monday = 1,
//     tuesday = 2,
//     wednesday = 3,
//     thursday = 4,
//     friday = 5,
//     saturady = 6,
//     sunday = 7;
// var hour = 0;
// const perHour = 10;
// var id;
// var day = 7;
//
// function weekSalary(week, hour) {
//   switch (day) {
//     case 1:
//       hour += 4;
//       break;
//     case 2:
//       hour += 6;
//       break;
//     case 3:
//       hour += 8;
//       break;
//     case 4:
//       hour += 10;
//       break;
//     case 5:
//       hour += 0;
//       break;
//     case 6:
//       hour += 2;
//       break;
//     case 7:
//       hour += 0;
//       break;
//   }
//   var allSalary = hour * 10;
//   weekSalary(week, hour);
//   console.log(`in ${week} week you work ${hour} hours and earn ${allSalary} $`);
// }
//
// weekSalary(1, hour);
// weekSalary(2, hour);


console.log('NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN');

var x = 10;
console.log(x + ' ' + y);
var y = 5;
