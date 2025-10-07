export class Display {
  constructor(elementId) {
    this.element = document.getElementById(elementId);
  }

  update(value) {
    this.element.textContent = value || '0';
  }

  clear() {
    this.element.textContent = '0';
  }
}
