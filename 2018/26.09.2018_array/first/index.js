/* js Arrays 'Hire or Not' */
let languages = ['PHP', 'JavaScript', 'Ruby', 'Python', 'Java'];
let mauro = ['Mauro Maricio', 'Python', 'JavaScript', 'Ruby', 'Java'];
let milad = ['Milad KHoshkaran', 'PHP', 'JavaScript', 'Ruby', 'Julia'];
let meir = ['Meir Overferst', 'JavaScript', 'Ruby'];
let jake = ['Jake Kostas', 'JavaScript'];
let hiredPersonen = [];
let participants = [];

let calculateSkills = function(requirenments, participants, pushAble) {
  let num = 0;
  for (let items of requirenments) {

      for (let skills of participants) {
        if (items === skills) {
          num++;
        }
      }
  }
    if (num >= 3) {
      pushAble.push(participants[0]);
  }
}

calculateSkills(languages, milad, hiredPersonen);
calculateSkills(languages, meir, hiredPersonen);
calculateSkills(languages, jake, hiredPersonen);

console.log(hiredPersonen);


// for (let items of languages) {
//   if (participants.includes(items)) {
//     num++;
//   }
// }

console.log(' ' + '\n' + '################################################' + '\n' + ' ');

/* js Arrays 'result revisit' */
let succeeded = [67, 82, 91, 96, 54];
let failed = [46, 48, 24, 33, 30];

let studentsResults = succeeded.concat(failed);

let calculateAvg = function(array) {
  let sum = 0;
  for (let result of array) {
    sum += result;
  }

  let average = sum / array.length;
  return average;
}

let averageForTenStudents = calculateAvg(studentsResults);

console.log(averageForTenStudents);

studentsResults.push(97);

let averageForElevenStudents = calculateAvg(studentsResults);

console.log(averageForElevenStudents);

let calculateMargin = function(firstAverage, secondAverage) {
  let msg = '';

  if (firstAverage > secondAverage) {
    msg = 'down';
  } else {
    msg = 'up';
  }
    if (firstAverage - secondAverage < 0) {
      let mainAverage = (firstAverage - secondAverage) * -1;
      console.log(`The average went ${msg} by ${mainAverage} points.`);
    } else {
      console.log(`The average went ${msg} by ${firstAverage - secondAverage} points.`);
    }

}
calculateMargin(averageForTenStudents, averageForElevenStudents);

let calculateMax = function(array) {
  let biggest = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] >= biggest) {
      biggest = array[i];
    }
  }
  return biggest;
}


let maxOfStudents = calculateMax(studentsResults);
console.log(`The best result is ${maxOfStudents}`);














//
