const sumEvenArgs = (...args) => {
  let sum = 0;
  args.forEach((item) => {
    if (item % 2 === 0) {
      sum += item;
    }
  });
  return sum;
};

export { sumEvenArgs };
