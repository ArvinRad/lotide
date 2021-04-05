const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
const myArray = [3, 4, 5, 6, 6];
const myArray2 = [3, 4, 5, 6, 6, 8];
console.log(middle(myArray), middle(myArray2));
assertArraysEqual(middle(myArray), [5]);
assertArraysEqual(middle(myArray2), [5, 6]);

