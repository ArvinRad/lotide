const eqArrays = function(actual, expected) {
  let i = 0;
  if (actual && expected) {
    while (i < actual.length) {
    if (actual[i] !== expected[i]) {
      return "failed. 🛑🛑🛑";
      break;
    }
    i++
    }
  }
  return "passed. ✅✅✅";
};
module.exports = eqArrays;