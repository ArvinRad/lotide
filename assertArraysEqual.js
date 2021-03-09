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
  return console.log(`Asserting the arrays is ${result} confirmed.`);
};
module.exports = assertArraysEqual;