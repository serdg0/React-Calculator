const Big = require('big-js');

const operate = (numberOne, numberTwo, operation) => {
  const library = {
    '+': (numA, numB) => numA.plus(numB),
    '-': (numA, numB) => numA.minus(numB),
    X: (numA, numB) => numA.times(numB),
    '÷': (numA, numB) => numA.div(numB),
    '%': (numA, numB) => numA.times(numB).times(100),
  };
  const numA = Big(numberOne);
  const numB = Big(numberTwo);
  if (operation === '÷' && numberTwo === '0') {
    return 'INFINITE';
  }
  return library[operation](numA, numB).toString();
};

export default operate;
