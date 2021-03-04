const eqObjects = function(actual, expected) {
  let result = "";
  actualK = Object.keys(actual);
  expectedK = Object.keys(expected);
// Testing if two arrays are equal
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





const assertEqual = function(actual, expected) {
  if (actual === expected ) {
    return console.log(`Assertion Passed: ${actual} === ${expected}`);
  } 
  else return console.log(`Assertion Failed: ${actual} == ${expected}`);
};
