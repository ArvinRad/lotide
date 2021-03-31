
const middle = function(array) {
  let result = [];
  let k = array.length;
  if (k > 2) {
    if (k %2 == 1 ) {
     result.push(array[(k - 1) / 2]);
    } else {
    result = array.slice((k / 2) - 1, (k / 2) + 1);
    }
  }
return result;
}
module.exports = middle;

const assertArraysEqual = require('./assertArraysEqual')

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
