const limitFunctionCallCount = (cb, n) => {
  let numberOfCallsValid = n;
  return (...args) => {
    if (numberOfCallsValid > 0) {
      numberOfCallsValid -= 1;
      if (args !== undefined && args.length > 0) {
        return cb(...args);
      }
      return cb();
    } return null;
  };
};

export {
  limitFunctionCallCount,
};
