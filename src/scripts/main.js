import {
  add,
  subtract,
  multiply,
  divide,
  percent,
  toggleSign,
} from './operations.js';
import './theme.js';
import '../styles/styles.css';

const inputDisplay = document.getElementById('user-input');
let current = '';
let firstOperand = null;
let operator = null;
let resetNext = false;

function updateDisplay() {
  inputDisplay.textContent = current || '0';
}

function handleNumber(num) {
  if (resetNext) {
    current = '';
    resetNext = false;
  }

  num = num.trim();

  if (num === '.') {
    if (!current) {
      current = '0';
    }
    if (current.includes('.')) return;
  } else {
    if (current === '0') {
      current = '';
    }
  }

  current += num;
  updateDisplay();
}

function handleOperator(op) {
  if (firstOperand === null) {
    firstOperand = parseFloat(current) || 0;
  } else if (!resetNext) {
    firstOperand = calculate(firstOperand, parseFloat(current) || 0, operator);
    current = Number(firstOperand.toFixed(10)).toString();
    updateDisplay();
  }
  operator = op;
  resetNext = true;
}

function calculate(a, b, op) {
  switch (op) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      if (b === 0) {
        alert('Error: division by zero');
        return a;
      }
      return divide(a, b);
  }
  return b;
}

function handleEquals() {
  if (operator && !resetNext) {
    const result = calculate(firstOperand, parseFloat(current) || 0, operator);
    current = Number(result.toFixed(3)).toString();
    updateDisplay();
    firstOperand = null;
    operator = null;
    resetNext = true;
  }
}

function handlePercent() {
  current = Number(percent(parseFloat(current) || 0).toFixed(10)).toString();
  updateDisplay();
}

function handleToggleSign() {
  current = Number(toggleSign(parseFloat(current) || 0).toFixed(10)).toString();
  updateDisplay();
}

function handleClear() {
  current = '';
  firstOperand = null;
  operator = null;
  updateDisplay();
}

function handleDelete() {
  current = current.slice(0, -1);
  updateDisplay();
}

document.querySelectorAll('.keys__number').forEach((btn) => {
  btn.addEventListener('click', (e) => handleNumber(e.target.textContent));
});

document.querySelectorAll('.keys__others').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const val = e.target.textContent;
    if (val === 'AC') handleClear();
    else if (val === 'DEL') handleDelete();
    else if (val === '%') handlePercent();
    else if (val === '+/-') handleToggleSign();
    else if (val === '=') handleEquals();
    else if (val === '.') handleNumber('.');
    else handleOperator(val);
  });
});
