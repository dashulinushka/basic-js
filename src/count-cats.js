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
function countCats(matrix) {
  const a = matrix.flatMap(row => row);

  let count = 0;

  for (let i = 0; i < a.length; i += 1) {
      if (a[i] === '^^'){
        count ++;
      }
  }
  return count;
}

module.exports = {
  countCats
};
