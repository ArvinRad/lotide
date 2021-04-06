const assertEqual = function(actual, expected) {
  let result = true;
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    result = false;
  }

  return result;
};
module.exports = assertEqual;
