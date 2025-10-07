export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  if (b === 0) return 'Error';
  return a / b;
}

export function percent(a) {
  return a / 100;
}

export function toggleSign(a) {
  return -a;
}
