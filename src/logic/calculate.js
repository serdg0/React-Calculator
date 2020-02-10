import operate from './operate';

const calculate = (data, buttonName) => {
  const operators = ['+', '-', 'X', '÷', '%'];
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
  const others = ['+/-', 'AC', '='];
  let { total, next, operation } = data;
  const isOperation = buttonName => operators.includes(buttonName);
  const isDigit = buttonName => digits.includes(buttonName);
  const isOther = buttonName => others.includes(buttonName);

  if (isOperation(buttonName)) {
    if (total && next == null) {
      next = total;
    }
    total = next;
    next = null;
    operation = buttonName;
  } else if (isDigit(buttonName)) {
    if (buttonName === '.' && next.includes(buttonName)){
      return true;
    }
    next = (next == null ? '' : next) + buttonName;
  } else if (isOther(buttonName)) {
     if (buttonName === '=') {
    total = operate(total, next, operation);
    next = null;
     } else if (buttonName === '+/-') {
       const nextOp = (-1 * parseInt(next));
       next = nextOp.toString();
     } else {
       total = null;
       next = null;
       operation = null;
     }
  }
  return { total, next, operation };
};

export default calculate;
