// Start your implementation here
function bizarreStringIncrementer(str) {
  let remainder = 0;
  let carry = 1;
  let parsedNumber = null;
  let numberString = '';
  let i = (str.length - 1);
  // eslint-disable-next-line radix
  while (parseInt(str[i]) >= 0) {
    // eslint-disable-next-line radix
    parsedNumber = parseInt(str[i]);
    remainder = parsedNumber + carry;

    if (remainder > 9) {
      carry = remainder / 10;
      remainder %= 10;
    } else {
      carry = 0;
    }
    numberString = remainder + numberString;

    i -= 1;
  }
  // eslint-disable-next-line max-len
  return carry === 1 ? str.slice(0, i + 1) + carry + numberString : str.slice(0, i + 1) + numberString;
}
export {
  bizarreStringIncrementer,
};
