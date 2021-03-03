const eqArrays = function(actual, expected) {
  let i = 0;
  while (i < actual.length) {
    if (actual[i] !== expected[i] ) {
      return false;
     break;
    } 
  i++
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  let result = "";
 if (actual.length == expected.length) {
   let i = 0;
   while (i < actual.length) {
     if (actual[i] !== expected[i] ) {
      result = "NOT";
      break;
     } 
  i++
   }
 } else result = "NOT"
 return console.log(`The arrays are ${result} equal`);
};

const middle = function(array) {
  let result = [];
  let k = array.length;
  if (k > 2) {
    if (k %2 == 1 ) {
     result.push(array[(k - 1) / 2]);
    } else result = array.slice((k / 2) - 1, (k / 2) + 1);
    }
console.log(result)
return result;
};
