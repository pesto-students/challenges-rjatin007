const UPPER_CASE_FIRST_LETTER_ASCII_CODE = 65;
const UPPER_CASE_LAST_LETTER_ASCII_CODE = 90;
const LOWER_CASE_FIRST_LETTER_ASCII_CODE = 97;
const LOWER_CASE_LAST_LETTER_ASCII_CODE = 122;
const CIPHER_FACTOR = 13;

function cipherUpperCase(asciiCode) {
  const transformedAsciiCode = asciiCode + CIPHER_FACTOR;

  return transformedAsciiCode > UPPER_CASE_LAST_LETTER_ASCII_CODE
    ? String.fromCharCode(
      // eslint-disable-next-line max-len
      UPPER_CASE_FIRST_LETTER_ASCII_CODE + (transformedAsciiCode - UPPER_CASE_LAST_LETTER_ASCII_CODE) - 1,
    )
    : String.fromCharCode(transformedAsciiCode);
}
function cipherLowerCase(asciiCode) {
  const transformedAsciiCode = asciiCode + CIPHER_FACTOR;
  return transformedAsciiCode > LOWER_CASE_LAST_LETTER_ASCII_CODE
    // eslint-disable-next-line max-len
    ? String.fromCharCode(LOWER_CASE_FIRST_LETTER_ASCII_CODE + (transformedAsciiCode - LOWER_CASE_LAST_LETTER_ASCII_CODE) - 1)
    : String.fromCharCode(transformedAsciiCode);
}

const checkForUpperCase = char => /^[A-Z]+$/.test(char);
const checkForLowerCase = char => /^[a-z]+$/.test(char);

function rot13(str) {
  let cipheredString = '';

  for (let i = 0; i < str.length; i += 1) {
    if (checkForLowerCase(str[i])) {
      cipheredString += cipherLowerCase(str.charCodeAt(i));
    } else if (checkForUpperCase(str[i])) {
      cipheredString += cipherUpperCase(str.charCodeAt(i));
    } else {
      // placing special character as they are
      cipheredString += str[i];
    }
  }
  return cipheredString;
}

export {
  rot13,
};
