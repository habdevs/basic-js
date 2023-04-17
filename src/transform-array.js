const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`);

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let actions = {
      '--discard-next': () => i++,
      '--discard-prev': () => result[result.length - 1] === arr[i - 1] && result.pop(),
      '--double-next': () => arr[i + 1] && result.push(arr[i + 1]),
      '--double-prev': () => arr[i - 1] && arr[i - 2] !== '--discard-next' && result.push(arr[i - 1]),
      'default': () => result.push(arr[i])
    };
    (actions[arr[i]] || actions['default'])();
  }

  return result;
}

module.exports = {
  transform
};
