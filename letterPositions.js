const letterPositions = function(myString) {
  const result = {};
    for (let i = 0; i < myString.length; i++) {
      if (Object.keys(result).includes(myString.charAt(i))) {
        result[myString.charAt(i)].push(i);
    } else result[myString.charAt(i)] = [i]; 
    };
  delete result[' '];
  if (Object.keys(result) === []) result = "undefined";
  return result;
  };

  const result1 = letterPositions("lighthouse in the house");

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

assertArraysEqual(result1.h, [3, 5, 15, 18]);
assertArraysEqual(result1.e, [9, 16, 22]);
