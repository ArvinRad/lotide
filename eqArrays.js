const eqArrays = function(actual, expected) {
  let i = 0;
  if (actual && expected) {
    while (i < actual.length) {
    if (actual[i] !== expected[i]) {
      return "Assertion failed. 🛑🛑🛑";
      break;
    }
    i++
    }
  }
  return "Assertion passed. ✅✅✅";
};
module.exports = eqArrays;