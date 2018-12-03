let emptyArray = [];

for (let i = 1; i <= 1000; i++) {
  emptyArray.push(i);
}

console.log(emptyArray);

console.log(' ' + '\n' + '//////////////////////////////////////////////////' + '\n' + ' ');

let first = ['lion', 'tiger', 'cat'];
let second = ['red', 'yellow', 'green'];

let both = first.concat(second);

console.log(both);

console.log(' ' + '\n' + '#####################################################' + '\n' + ' ');


/* exercise from js Arrays 'Satisfaction form' */
let common = function(name, course, levelOfSatisfaction) {
  this.name = name;
  this.course = course;
  this.levelOfSatisfaction = levelOfSatisfaction;
  this.interpretFeel = function() {

    if (this.levelOfSatisfaction > 80) {
      this.mood = 'He/She found the course perfect.';
    } else if (this.levelOfSatisfaction >= 50) {
      this.mood = 'He/She is content with the course overall';
    } else {
      this.mood = 'Keep complaining. Potential';
    }
  }
}

let ali = new common('Ali pudina', 'JS course', 65);
let mauro = new common('Mauro Maricio', 'PHP', 23);
let eugen = new common('Eugen Kuhn', 'PHP', 85);
let meir = new common('Meir Overferst', 'JS course', 62);
let nour = new common('Mohammed Nour', 'JS course', 59);
let carmine = new common('Carmine Tambas', 'JS course', 72);
let jens = new common('Jens Soltwedel', 'PHP', 82);
let lahm = new common('Mauro Maricio', 'PHP', 85);

let studentsTogrther = [
  mauro,
  eugen,
  meir,
  ali,
  nour,
  carmine,
  jens,
  lahm
];

let addMood = function(array) {
  for (let student of array) {
    student.interpretFeel();
    // console.log(student);
    console.log(student.mood);
  }
}

addMood(studentsTogrther);
