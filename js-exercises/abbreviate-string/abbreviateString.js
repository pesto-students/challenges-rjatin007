// import { exception } from 'console';
import { isString } from 'util';

function getAbbreviation(str) {
  const firstWord = str.slice(0, str.indexOf(' '));
  const lastIndexOfSpace = str.lastIndexOf(' ');
  const abbreviatedLetter = str
    .slice(lastIndexOfSpace + 1, lastIndexOfSpace + 2)
    .toUpperCase();

  return `${firstWord} ${abbreviatedLetter}.`;
}
function abbreviateString(str) {
  if (isString(str)) {
    const result = getAbbreviation(str);

    return result;
  }
  // eslint-disable-next-line no-throw-literal
  throw 'Not a string';
}

export { abbreviateString };
