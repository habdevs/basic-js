const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const result = [];
  let charCount = 1;
  let prevChar = str[0];
  
  for (let i = 1; i < str.length; i++) {
    let currChar = str[i];
    if (currChar === prevChar) {
      charCount++;
    } else {
      const encodedChar = charCount > 1 ? `${charCount}${prevChar}` : prevChar;
      result.push(encodedChar);
      charCount = 1;
    }
    prevChar = currChar;
  }
  result.push(charCount > 1 ? `${charCount}${str[str.length - 1]}` : str[str.length - 1]);
  return result.join('');
}

module.exports = {
  encodeLine
};
