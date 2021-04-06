
const eqArrays = require('./eqArrays');

const eqObjects = function(actual, expected) {
  let objectsEqual = true;
  if (typeof actual === "object" && typeof expected === "object" && Object.keys(actual).length === Object.keys(expected).length) {
    for (let key in actual) {
      if (Array.isArray(actual[key]) && (Array.isArray(expected[key]))) {
        objectsEqual = eqArrays(actual[key], expected[key]);
        if (!objectsEqual) {
          break;
        }
      } else if(actual[key] !== expected[key]) {
        objectsEqual = false;
        break;
      }
    }
  } else {
   objectsEqual = false;
  }
 console.log(actual, expected, objectsEqual);
 return objectsEqual;
}

module.exports = eqObjects;