const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(array) {
    let depth = 1;

    if (Array.isArray(array)) {
      let maxSubDepth = 0;
      array.forEach((element) => {
        const subDepth = this.calculateDepth(element);
        if (subDepth > maxSubDepth) {
          maxSubDepth = subDepth;
        }
      });
      depth += maxSubDepth;
    } else {

      return 0;
    }

    return depth;
  }
}

module.exports = {
  DepthCalculator
};
