const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let array = n.toString(10).split('');
  let max = 0;
  
  for(let i = 0; i < array.length; i++) {
    let d = [...array];
    d.splice(i, 1);
    d = d.join('');
    if(+d > max) {
      max = +d;}
  }
  return max;
 
}

module.exports = {
  deleteDigit
};
