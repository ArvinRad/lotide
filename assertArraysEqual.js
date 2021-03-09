const eqArrays = require('./eqArrays');
const assertArraysEqual = function(actual, expected) {
  return console.log(`The assertion of function is ${eqArrays(actual, expected)}.`);
};
module.exports = assertArraysEqual;