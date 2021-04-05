const eqArrays = function(actual, expected) {
  let i = 0;
  if (actual && expected && actual.length === expected.length) {
    while (i < actual.length) {
    if (actual[i] !== expected[i]) {
      return " failed. 🛑🛑🛑";
    }
    i++
    }
  } else return " failed. 🛑🛑🛑";
  return " passed. ✅✅✅";
};
module.exports = eqArrays;