
let ali = ['ali', 'Pudina', 23];
let jake = ['Jake', 'Diagonis', 45];
let milad = ['Milad', 'Khoshkaran', 67];

let candidates = [ali, jake, milad];


/* first [] about main array and last [] the insided arrays */
console.log(candidates[2][0]);

console.log(' ' + '\n' + '################################################' + '\n' + ' ');

let groceries = ['chocolate', 'bananas', 'rice', 'beers', 'deodorant'];
let amount = [5, 5, 2, 6, 1];
let mainArray = [];

/* maping method */
for (let i = 0; i < groceries.length; i++) {
  mainArray.push([groceries[i], amount[i]]);

  // console.log(`Please buy ${amount[i]}x ${groceries[i]}`);

  console.log(`Please buy ${mainArray[i][1]}x ${mainArray[i][0]}`);
}

/* second way */
// for (let i = 0; i < groceries.length; i++) {
//   let pair = [groceries[i], amount[i]];
//   mainArray.push(pair);
// }

console.log(mainArray);

console.log(' ' + '\n' + '=========================================================' + '\n' + ' ');

let morteza = 'Hi Morteza, how are you?';
console.log(morteza);

console.log(morteza.indexOf('are, 21'));








//
