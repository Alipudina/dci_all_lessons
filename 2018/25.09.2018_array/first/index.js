
let bundesliga = [
  'Bayern',
  'Wolfsburg',
  'Bremen',
  'Leipzig',
  'Mainz',
  'Hannover',
  'Gladbach',
  'suttgart',
  'Dortmond'
];

let hatedTeam = ['Bayern', 'Hannover', 'Bremen'];
//
// for ( let team of bundesliga) {
//
//       if (hatedTeam.includes(team)) {
//         continue;
//       }
//
//       console.log(team);
//
//     }
//
//
//
// for (let i = 0; i < bundesliga.length; i++) {
//   console.log(`${i + 1}. ${bundesliga[i]}`);
//   // console.log(bundesliga[i]);
// }


/* we use this one too, but - 1 muss not forget */
// for (let i = 0; i <= bundesliga.length - 1; i++) {
//   console.log(bundesliga[i]);
// }


/* another loop,   for (let ... of loop)   but it dos'nt work always */
// for ( let team of bundesliga) {
//   console.log(team);
// }

for (let team of bundesliga) {

  let isHated = false;

  for (let notLikeTeam of hatedTeam) {
    if(team === notLikeTeam) {
      isHated = true;
      break;
    }
  }

  if (!isHated) {
    console.log(team);
  }
}

console.log(' ' + '\n' + '#########################################################' + '\n' + ' ');


// exercise from js Arrays 'Test results Problem'
let results = [78, 82, 45, 69, 23, 91, 55, 39, 66, 60];
let basis = 50;
let num = 0;

for (let i of results) {

  if (i < basis) {
    num++;
  }

}

let percent = (num / results.length) * 100;

console.log(percent);

/* show the count of data in array */
console.log(results.length);


/* another way */
// for (let i = 0; i < results.length; i++) {
//   if (results[i < basis]) {
//     num++;
//   }
// }


/* the best way and more useable */
let calculateFailurePercentage = function(testPoints, basis) {
  let failedStudentsNumber = 0;

  for (let i = 0; i < results.length; i++) {
    if (testPoints[i] < basis) {
      failedStudentsNumber++;
    }
  }

  let percent = (num / results.length) * 100;
  return ` The Percentage of failed students is ${percent}% of total participants`;
}

console.log(calculateFailurePercentage(results, 50));









//








//
