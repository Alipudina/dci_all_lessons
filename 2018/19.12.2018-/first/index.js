// implementation code
const addition = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'it is not a number';

  } else if (a < 0) {
    return Math.abs(a)*b;
    // it make it always positive number a number
  }

    return a + b;
}


// testing code
const checkAddition = function(ev) {
  const expectedResult = 12;
  const actualResult = addition(2, 10);

  if (actualResult == expectedResult) {
    console.log('your test has passt');
  } else {
    console.log('your test has failed this is a checkAddition fucn');
  }
}();


const additionGoneWrong = (ev => {
  const expectedResult = 'it is not a number';
  const actualResult = addition(3, '8');

  if (actualResult == expectedResult) {
    console.log('your test has passt');
  } else {
    console.log('your test has failed it is a additionGoneWrong');
  }
})();

const checkMultiplicatin = (() => {
  const expectedResult = 15;
  const actualResult = addition(-3, 5);

  if (actualResult == expectedResult) {
    console.log('your test has passt');
  } else {
    console.log('your test has failed it is a checkMultiplicatin');
  }
})();
