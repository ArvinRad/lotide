const assertArraysEqual = function(actual, expected) {
  const eqArrays = require('./eqArrays');
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
}
module.exports = assertArraysEqual;
