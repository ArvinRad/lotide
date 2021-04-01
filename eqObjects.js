const eqObjects = function(actual, expected) {
  let result = "";
  actualKeys = Object.keys(actual);
  expectedKeys = Object.keys(expected);

// Testing if two arrays are equal

  const eqArrays = function(actual, expected) {
  let i = 0;
  let res = true;
  if (actual.length === expected.length) {
    while (i < actual.length) {
      if (actual[i] !== expected[i] ) {
        res = false;
        break;
      }
      i++
    }
  } else {
    res = false;
  }
  return res
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
        }else if (expected[actualKeys[i]] !== actual[actualKeys[i]]) {
          result = "NOT";
          break;
        };
      };
    i++
    }
  } else {
    result = "NOT";
  }
  return console.log(`The objects are ${result} equal`);
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
