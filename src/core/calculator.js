import {
  add,
  subtract,
  multiply,
  divide,
  percent,
  toggleSign,
} from './operations.js';
import { BUTTON_TYPES } from '../utils/consts';

export class Calculator {
  constructor(display) {
    this.display = display;
    this.current = '';
    this.firstOperand = null;
    this.operator = null;
    this.resetNext = false;
  }

  calculate(a, b, op) {
    switch (op) {
      case BUTTON_TYPES.ADD:
        return add(a, b);
      case BUTTON_TYPES.SUBTRACT:
        return subtract(a, b);
      case BUTTON_TYPES.MULTIPLY:
        return multiply(a, b);
      case BUTTON_TYPES.DIVIDE:
        if (b === 0) {
          alert('Error: division by zero');
          return a;
        }
        return divide(a, b);
    }
    return b;
  }

  handleNumber(num) {
    if (this.resetNext) {
      this.current = '';
      this.resetNext = false;
    }

    if (num === BUTTON_TYPES.DOT) {
      if (!this.current) {
        this.current = '0';
      }
      if (this.current.includes('.')) return;
    } else {
      if (this.current === '0') {
        this.current = '';
      }
    }

    this.current += num;
    this.display.update(this.current);
  }

  handleOperator(op) {
    if (this.firstOperand === null) {
      this.firstOperand = parseFloat(this.current) || 0;
    } else if (!this.resetNext) {
      this.firstOperand = this.calculate(
        this.firstOperand,
        parseFloat(this.current) || 0,
        this.operator
      );
      this.current = Number(this.firstOperand.toFixed(10)).toString();
      this.display.update(this.current);
    }
    this.operator = op;
    this.resetNext = true;
  }

  handleEquals() {
    if (this.operator && !this.resetNext) {
      const result = this.calculate(
        this.firstOperand,
        parseFloat(this.current) || 0,
        this.operator
      );
      this.current = Number(result.toFixed(3)).toString();
      this.display.update(this.current);
      this.firstOperand = null;
      this.operator = null;
      this.resetNext = true;
    }
  }

  handlePercent() {
    this.current = Number(
      percent(parseFloat(this.current) || 0).toFixed(10)
    ).toString();
    this.display.update(this.current);
  }

  handleToggleSign() {
    this.current = Number(
      toggleSign(parseFloat(this.current) || 0).toFixed(10)
    ).toString();
    this.display.update(this.current);
  }

  handleClear() {
    this.current = '';
    this.firstOperand = null;
    this.operator = null;
    this.display.update(this.current);
  }

  handleDelete() {
    this.current = this.current.slice(0, -1);
    this.display.update(this.current);
  }
}
