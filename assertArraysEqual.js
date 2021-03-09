const eqArrays = require('./eqArrays');
const assertArraysEqual = function(actual, expected) {
  return console.log(`Asserting the function is ${eqArrays(actual, expected)}.`);
};
module.exports = assertArraysEqual;