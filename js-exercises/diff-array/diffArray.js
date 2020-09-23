// O n-square

// function returnDifferent(...array) {
//   const uniqueValues = [];
//   array.forEach((item) => {
//     if (uniqueValues[item] !== undefined) {
//       delete uniqueValues[item];
//     } else {
//       uniqueValues[item] = item;
//     }
//   });
//   return Object.values(uniqueValues);
// }
function returnDifferent(array1, array2) {
  const maxIterations = array1.length >= array2.length ? array1.length : array2.length;
  const uniqueValues1 = [];
  const uniqueValues2 = [];
  for (let i = 0; i < maxIterations; i += 1) {
    if (array1[i] && !array2.includes(array1[i])) {
      uniqueValues1.push(array1[i]);
    }
    if (array2[i] && !array1.includes(array2[i])) {
      uniqueValues2.push(array2[i]);
    }
  }

  if (uniqueValues1.length > 0 && uniqueValues2.length > 0) {
    return [...uniqueValues1, ...uniqueValues2];
  }
  if (uniqueValues1.length === 0 && uniqueValues2.length > 0) {
    return uniqueValues2;
  }
  if (uniqueValues2.length === 0 && uniqueValues1.length > 0) {
    return uniqueValues1;
  }

  return [];
}

function diffArray(array1, array2) {
  if (
    !(
      Array.isArray(array2)
      || Array.isArray(array1)
      || (array2.length === 0 && array2.length === 0)
    )
  ) {
    // eslint-disable-next-line no-throw-literal
    throw 'Not an array';
  }
  if (array2.length === 0) {
    return array1;
  }
  if (array1.lenth === 0) {
    return array2;
  }
  return returnDifferent(array1, array2);
}

export {
  diffArray,
};
