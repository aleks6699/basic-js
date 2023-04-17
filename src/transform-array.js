const { NotImplementedError } = require("../extensions/index.js");

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
  if (Array.isArray(arr)) {
    let newArray = arr.slice(0);
    for (let i = 0; i < newArray.length; i++)
      if (newArray[i] === "--double-next") {
        newArray.splice(i, 1);
        if (i < newArray.length) {
          let part1 = newArray.slice(0, i);
          let part2 = newArray.slice(i, newArray.length);
          part1.push(part2[0]);
          newArray = part1.concat(part2);
        }
      } else if (newArray[i] === "--double-prev") {
        newArray.splice(i, 1);
        if (i > 0 && arr[i] !== "--discard-next") {
          let part1 = newArray.slice(0, i);
          let part2 = newArray.slice(i, newArray.length);
          part1.push(part1[part1.length - 1]);
          newArray = part1.concat(part2);
        }
      } else if (newArray[i] === "--discard-next") {
        newArray.splice(i, 1);

        if (i <= newArray.length) {
          newArray.splice(i, 1);
          i--;
        }
      } else if (newArray[i] === "--discard-prev") {
        newArray.splice(i, 1);
        if (i > 0 && arr[i] !== "--discard-next") {
          newArray.splice(i - 1, 1);
        }
      }
    return newArray;
  } else {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
}

module.exports = {
  transform,
};
