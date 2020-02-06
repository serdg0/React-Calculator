import operate from './operate';

const calculate = (data, buttonName) => {
  const operators = ['+', '-', 'X', '÷', '%'];
  const digits = Array.from({ length: 10 }, (v, i) => `${i}`);
  let { total, next, operation } = data;
  const library = {
    '+/-': () => {
      next *= -1;
    },
    '=': () => total,
    AC: () => {
      total = null;
      next = null;
      operation = null;
    },
  };
  const isOperation = buttonName => operators.includes(buttonName);
  const isDigit = buttonName => digits.includes(buttonName);

  if (isOperation(buttonName)) {
    total = operate(total, next, operation);
  } else if (isDigit(buttonName)) {
    next += buttonName;
  } else {
    library[buttonName]();
  }

  return data;
};

export default calculate;
