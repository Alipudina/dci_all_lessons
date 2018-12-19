
const fizfunc = a => {

    if (typeof a !== 'number') {
      return 'it is not a number';
    } else if (a <= 0) {
      return 'it is a negative number or 0';
    } else if (a % 5 == 0 && a % 3 == 0) {
      return 'fizzbazz';
    } else if (a % 3 == 0) {
      return 'fizz';
    } else if (a % 5 == 0) {
      return 'bazz';
    } else {
      return a;
    }
}


const checkType = function () {
  const expectedResult = 'it is not a number';
  const actualResult = fizfunc('5');

  expectedResult == actualResult ? console.log('test is ok') : console.log('test is failed in checkType func');
}();

const checkNegativ = function () {
  const expectedResult = 'it is a negative number or 0';
  const actualResult = fizfunc(0);

  expectedResult == actualResult ? console.log('test is ok') : console.log('test is failed in checkNegativ func');
}();

const checkBothNum = function () {
  const expectedResult = 'fizzbazz';
  const actualResult = fizfunc(15);

  (expectedResult == actualResult) ? console.log('test is ok') : console.log('test is failed in checkBothNum func');
}();

const checkMulti3 = function () {
  const expectedResult = 'fizz';
  const actualResult = fizfunc(9);

  (expectedResult == actualResult) ? console.log('test is ok') : console.log('test is failed in checkMulti3 func');
}();

const checkMulti5 = function () {
  const expectedResult = 'bazz';
  const actualResult = fizfunc(25);

  (expectedResult == actualResult) ? console.log('test is ok') : console.log('test is failed in checkMulti5 func');
}();

const checkNotMulti = function () {
  const expectedResult = 7;
  const actualResult = fizfunc(7);

  (expectedResult == actualResult) ? console.log('test is ok') : console.log('test is failed in checkNotMulti func');
}();


// working of factorial
let myFactorial = num => {

  if (typeof num !== 'number') {
    return 'not a number';
  } else if (num < 0) {
    return 'the number is negative';
  } else if (num === 0) {
    return 1;
  } else {
    for (let count = 1; count <= num; count++) {
      count *= count;
      console.log(count);
      return count;
    }
    // return result;
    console.log(count);
  }
}
myFactorial(3);
