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
  return str.split('').reduce((res, char) => {
    res.length === 0 || res[res.length - 1][1] !== char ? res.push([1, char]) : res[res.length - 1][0]++;
    return res;
  }, []).reduce((res, v) => res + (v[0] === 1 ? v[1] : v[0].toString() + v[1]), '');
 
}

module.exports = {
  encodeLine
};
