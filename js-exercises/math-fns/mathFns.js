// You can use the function from the `Math` module.
const sqrt = (x) => (x !== undefined ? Math.sqrt(x) : null);
// eslint-disable-next-line no-restricted-properties
const power = (x, y) => (x !== undefined && y !== undefined ? Math.pow(x, y) : null);
const round = (x) => (x !== undefined ? Math.round(x) : null);

// Don't change the exported names.
export {
  sqrt,
  power,
  round,
};
