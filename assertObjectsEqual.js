const assertObjectsEqual = function(actual, expected) {
  let result = "";
  let actualKeys = Object.keys(actual);
  let expectedKeys = Object.keys(expected);

  // Testing if two arrays are equal

  const eqArrays = function(actual, expected) {
    let i = 0;
    let res = true;
    if (actual.length === expected.length) {
      while (i < actual.length) {
        if (actual[i] !== expected[i]) {
          res = false;
          break;
        }
        i++
      }
    } else {
      res = false;
    }
    return res;
  };

  // Testing for the objects

  if (actualKeys.length == expectedKeys.length) {
    let i = 0;
    while (i < actualKeys.length) {
      if (expectedKeys.includes(actualKeys[i])) {
        if ((typeof expected[actualKeys[i]] === "object") || (typeof actual[actualKeys[i]] === "object")) {
          if (!(eqArrays(expected[actualKeys[i]], actual[actualKeys[i]]))) {
            result = "NOT";
            break;
          }
        } else if (expected[actualKeys[i]] !== actual[actualKeys[i]]) {
          result = "NOT";
          break;
        };
      };
      i++
    }
  } else {
    result = "NOT";
  }
  if (result === "") {
    return console.log(`Assertion Passed: ✅✅✅ ${actual} === ${expected}`);
  } else {
    return console.log(`Assertion Failed: 🛑🛑🛑 ${actual} !== ${expected}`);
  }
};
module.exports = assertObjectsEqual;