const countLetters = function(myString) {
  const result = {};
  for (const letter of myString) {
    if (result[letter]) {
      result[letter]++;
    } else {
      result[letter] = 1;
    }
  }
  delete result[' '];
  return result;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`Assertion Failed: ${actual} == ${expected}`);
  }
};

const result1 = countLetters("lighthouse in the house");
assertEqual(result1["h"], 4);
assertEqual(result1["a"], undefined);
assertEqual(result1["s"], 2);