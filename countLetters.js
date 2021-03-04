const countLetters = function(myString) {
result = {};
  for (letters of myString) {
    if (Number.isInteger(result[letters])) {
        result[letters]++
    } else result[letters] = 1;
  };
delete result[' '];
if (Object.keys(result) === []) result = "undefined";
return result;
};

const assertEqual = function(actual, expected) {
  if (actual === expected ) {
    return console.log(`Assertion Passed: ${actual} === ${expected}`);
  } 
  else return console.log(`Assertion Failed: ${actual} == ${expected}`);
};

const result1 = countLetters("lighthouse in the house");
assertEqual(result1["h"], 4);
assertEqual(result1["a"], undefined);
assertEqual(result1["s"], 2);