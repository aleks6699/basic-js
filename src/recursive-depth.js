const { NotImplementedError } = require("../extensions/index.js");

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
  calculateDepth(arr) {
    let depth = arguments[1] ?? 0;
    if (Array.isArray(arr)) {
      depth += 1;
      return arr.length > 0
        ? Math.max(...arr.map((v) => this.calculateDepth(v, depth)))
        : depth;
    }
    return depth;
  }
}

module.exports = {
  DepthCalculator,
};
