const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(backyard) {
  let cats = 0;
  for (let i = 0; i < backyard.length; i++) {
    // loop through the columns of each row
    for (let j = 0; j < backyard[i].length; j++) {
      // check if the current element is a cat ear
      if (backyard[i][j] === "^^") {
        // increment the number of cats by one
        cats++;
      }
    }
  }
  // return the number of cats
  return cats;
}

module.exports = {
  countCats
};
