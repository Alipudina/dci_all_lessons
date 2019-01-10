
const operation = require('./operation.js');

const operationTest = () => {
  const expectedResult = 24;
  const actuelResult = operation(10, 14);

  expectedResult === actuelResult ? console.log('it passed') : console.log('it failed');
}
operationTest();
