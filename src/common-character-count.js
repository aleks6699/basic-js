const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {
  let arrayS1 = s1.split(''); 
  for (let i = 0; i < s2.length; i++) {
    if (arrayS1.includes(s2[i])) arrayS1.splice(arrayS1.indexOf(s2[i]), 1)    
  };
  return s1.length - arrayS1.length;
 
}

module.exports = {
  getCommonCharacterCount
};
