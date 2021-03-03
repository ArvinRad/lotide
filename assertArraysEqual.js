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