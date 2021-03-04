const findKeyByValue = function(myObject, value) {
  result = "undefined";
  i = 0;
  while (i < Object.keys(myObject).length) {
    if (Object.keys(myObject)[i] === value) {
      results = Object.keys(myObject)[i]
      break;
    };
  i++;
  };
}


const assertEqual = function(actual, expected) {
  if (actual === expected ) {
    return console.log(`Assertion Passed: ${actual} === ${expected}`);
  } 
  else return console.log(`Assertion Failed: ${actual} == ${expected}`);
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
