const letterPositions = function(myString) {
  const result = {};
  for (let i = 0; i < myString.length; i++) {
    if (Object.keys(result).includes(myString.charAt(i))) {
      result[myString.charAt(i)].push(i);
    } else {
      result[myString.charAt(i)] = [i];
    }
  }
  delete result[' '];
  return result;
};

const result1 = letterPositions("lighthouse in the house");

const assertArraysEqual = require('./assertArraysEqual');

assertArraysEqual(result1.h, [3, 5, 15, 18]);
assertArraysEqual(result1.e, [9, 16, 22]);
assertArraysEqual(result1.k, undefined);
