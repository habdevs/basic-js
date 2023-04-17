const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} 
 * @param {String}
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(str1, str2) {
  const chars1 = str1.split('');
  const chars2 = str2.split('');

  return chars1.reduce((count, char) => {
    const index = chars2.indexOf(char);
    if (index >= 0) {
      count++;
      chars2.splice(index, 1);
    }

    return count;
  }, 0);
}


module.exports = {
  getCommonCharacterCount
};
