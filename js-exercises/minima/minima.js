function minima(k, arr) {
  const newArr = arr.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < k; i += 1) {
    result.push(newArr[i]);
  }
  return result;
}

export { minima };
