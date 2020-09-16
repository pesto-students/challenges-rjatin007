function sumFibs(num) {
  let last = 0;
  let curr = 1;
  let sum = 0;
  while (curr <= num) {
    if (curr % 2 !== 0) {
      sum += curr;
    }
    const temp = curr;
    curr += last;
    last = temp;
  }
  return sum;
}
function cacheFunction(fn) {
  const cache = {};
  return (...args) => {
    const n = args[0];
    if (cache[n]) {
      return cache[n];
    }

    const sum = fn(n);
    cache[n] = sum;
    return sum;
  };
}

export { sumFibs, cacheFunction };
