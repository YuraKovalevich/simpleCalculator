export function parseNumber(value) {
  return parseFloat(value) || 0;
}

export function formatNumber(value) {
  return Number(value.toFixed(10)).toString();
}
