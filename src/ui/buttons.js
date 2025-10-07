import { BUTTON_TYPES } from '../utils/consts';
export class ButtonHandler {
  constructor(calculator) {
    this.calculator = calculator;
    this.initializeEventListeners();
  }

  initializeEventListeners() {
    document.querySelectorAll('.keys__number').forEach((btn) => {
      btn.addEventListener('click', (e) =>
        this.calculator.handleNumber(e.target.textContent)
      );
    });

    document.querySelectorAll('.keys__others').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const val = e.target.textContent;
        this.handleSpecialButton(val);
      });
    });
  }

  handleSpecialButton(val) {
    switch (val) {
      case BUTTON_TYPES.AC:
        this.calculator.handleClear();
        break;
      case BUTTON_TYPES.DEL:
        this.calculator.handleDelete();
        break;
      case BUTTON_TYPES.PERCENT:
        this.calculator.handlePercent();
        break;
      case BUTTON_TYPES.PLUSMINUS:
        this.calculator.handleToggleSign();
        break;
      case BUTTON_TYPES.EQUALS:
        this.calculator.handleEquals();
        break;
      case BUTTON_TYPES.DOT:
        this.calculator.handleNumber('.');
        break;
      default:
        this.calculator.handleOperator(val);
    }
  }
}
