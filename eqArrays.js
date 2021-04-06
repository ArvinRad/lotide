const eqArrays = function(actual, expected) {
  let result = true;
  let i = 0;
  if (actual && expected && actual.length === expected.length) {
    while (i < actual.length) {
    if (actual[i] !== expected[i]) {
      result = false;
      break;
    }
    i++
    }
  } else {
    result = false;
  };
  return result;
};
module.exports = eqArrays;
