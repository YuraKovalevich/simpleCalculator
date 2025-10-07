import { Calculator } from './core/calculator.js';
import { Display } from './ui/display.js';
import { ButtonHandler } from './ui/buttons.js';

const display = new Display('user-input');
const calculator = new Calculator(display);
new ButtonHandler(calculator);

display.update('0');
