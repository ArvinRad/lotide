const assertObjectsEqual = function(actual, expected) {
  let result = "";
  actualK = Object.keys(actual);
  expectedK = Object.keys(expected);
// Testing if two arrays 
   const eqArrays = function(actual, expected) {
    let i = 0;
    let res = true;
    if (actual.length == expected.length) {
     while (i < actual.length) {
       if (actual[i] !== expected[i] ) {
          res = false;
          break;
       } 
      i++
      } 
    } else res = false;
  return res
  };
// Testing for the objects
 if (actualK.length == expectedK.length) {
   let i = 0;
   while (i < actualK.length) {
     if (expectedK.includes(actualK[i])) {
        if ((typeof expected[actualK[i]] === "object") || (typeof actual[actualK[i]] === "object")) {
          if (!(eqArrays(expected[actualK[i]], actual[actualK[i]]))) {
            result = "NOT";
            break;
          }
        }else if (expected[actualK[i]] !== actual[actualK[i]]) {
          result = "NOT";
          break;
          };
      }; 
  i++
   }
 } else result = "NOT"
 if (result == "") {
 return console.log(`Assertion Passed: ${actual} === ${expected}`);
 } else return console.log(`Assertion Failed: ${actual} !== ${expected}`);
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false