function forEach(array, callback) {
  for (let i = 0; i < array.length; i += 1) {
    callback(array[i]);
  }
}

function map(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i += 1) {
    result.push(callback(array[i]));
  }
  return result;
}
function filter(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}

function reduce(array, callback, initialValue) {
  let result = initialValue;
  for (let i = 0; i < array.length; i += 1) {
    // eslint-disable-next-line no-param-reassign
    result = callback(array[i], result);
  }
  return result;
}
export {
  forEach, map, filter, reduce,
};
