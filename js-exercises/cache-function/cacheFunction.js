function cacheFunction(cb) {
  const cacheObject = {};
  return (arg) => {
    if (arg !== undefined) { // if cb has arguments
      if (cacheObject[arg] !== undefined) {
        return cacheObject[arg].result;
      }
      cacheObject[arg] = {
        func: cb,
        result: cb(arg) ? cb(arg) : null,
      };
      return cacheObject[arg].result;
    } return cb();
  };
}
export {
  cacheFunction,
};
