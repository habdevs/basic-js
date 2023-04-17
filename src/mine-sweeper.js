const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function minesweeper(matrix) {
  let result = [];
  result = matrix.map(row => {
    return new Array(row.length).fill(0);
  });

  matrix.forEach((row, i) => {
    row.forEach((element, j) => {
      if (element === true) {
        result[i][j]--;
        [-1, 0, 1].forEach(a => {
          [-1, 0, 1].forEach(b => {
            if (i + a >= 0 && i + a < matrix.length && j + b >= 0 && j + b < matrix[i].length) {
              result[i + a][j + b]++;
            }
          });
        });
      }
    });
  });

  return result;
}

module.exports = {
  minesweeper
};
