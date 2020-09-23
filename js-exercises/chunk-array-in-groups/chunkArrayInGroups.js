function chunkArrayInGroups(array, chunkSize) {
  let currentIndex = 0;
  let arrays = [];
  while (currentIndex < array.length) {
    const endIndex = currentIndex + chunkSize;
    // eslint-disable-next-line max-len
    const newSlice = endIndex > array.length ? array.slice(currentIndex) : array.slice(currentIndex, endIndex);

    arrays = [...arrays, [...newSlice]];
    currentIndex += chunkSize;
  }
  return arrays;
}

export {
  chunkArrayInGroups,
};
