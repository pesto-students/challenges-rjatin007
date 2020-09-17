function balancedBraces(str) {
  const bracesStack = [];
  let isValid = true;
  const braces = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  [...str].forEach((element) => {
    if (element === '(' || element === '[' || element === '{') {
      bracesStack.push(element);
    } else if (element === ')' || element === ']' || element === '}') {
      const last = bracesStack.pop();
      isValid = isValid && element === braces[last];
    }
  });
  isValid = isValid && bracesStack.length === 0;

  return isValid;
}
export { balancedBraces };
