const findKeyByValue = function(myObject, value) {
  const flatten = require('./flatten');
  let myArr = flatten(Object.entries(myObject));
  let result = undefined;
  if (myArr.includes(value)) {
    result = myArr[myArr.indexOf(value) - 1];
  }
  return result;
};


// const assertEqual = function(actual, expected) {
//   if (actual === expected ) {
//     return console.log(`Assertion Passed: ${actual} === ${expected}`);
//   }
//   else return console.log(`Assertion Failed: ${actual} == ${expected}`);
// };

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const assertEqual = require('./assertEqual');

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
