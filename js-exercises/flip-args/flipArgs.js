function flipArgs(cb) {
  return (...args) => {
    // if internale functions are allowed
    // const reversedArgs =args.reverse();
    const reversedArgs = [];
    for (let i = 0; i < args.length; i += 1) {
      const last = args.length - (i + 1);
      reversedArgs.push(args[last]);
    }

    cb(reversedArgs);
  };
}

export { flipArgs };
