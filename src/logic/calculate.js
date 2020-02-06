import operate from './operate';

const calculate = (data, buttonName) => {
  const operators = ['+', '-', 'X', '÷', '%'];
  let { total } = data;
  let { next } = data;
  const { operation } = data;
  const library = {
    '+/-': () => {
      total *= -1;
      next *= -1;
    },
    '=': () => total,
    AC: () => { total = 0; },
  };
  const isOperation = buttonName => operators.includes(buttonName);

  if (isOperation(buttonName)) {
    return operate(total, next, operation);
  }
  return library[operation];
};

export default calculate;
