function removeFalsyValues(array) {
  if (!Array.isArray(array)) {
    // eslint-disable-next-line no-throw-literal
    throw 'Not an Array';
  }
  return array.filter((el) => el || false);
}

export {
  removeFalsyValues,
};
