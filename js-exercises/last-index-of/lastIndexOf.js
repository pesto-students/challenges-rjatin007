function lastIndexOf(num, arr) {
  let maxIndex = -1;
  arr.forEach((element, index) => {
    maxIndex = element === num ? index : maxIndex;
  });
  return maxIndex;
}

export { lastIndexOf };
