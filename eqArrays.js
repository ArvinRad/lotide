const eqArrays = function(actual, expected) {
  let i = 0;
  while (i < actual.length) {
    if (actual[i] !== expected[i]) {
      return false;
     break;
    }
  i++
  }
  return true;
};
module.exports = eqArrays;