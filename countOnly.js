const countOnly = function(allItems, itemToCount) {
  result = {};
  //item0 = object.key(itemToCount);
  for (item of allItems) {
    if (itemToCount[item] == true) {
      if (Number.isInteger(result[item])) {
        result[item]++
      } else result[item] = 1;
    };
  };
if (Object.keys(result) === []) result = "undefined";
return result;
}

const assertEqual = function(actual, expected) {
  if (actual === expected ) {
    return console.log(`Assertion Passed: ${actual} === ${expected}`);
  } 
  else return console.log(`Assertion Failed: ${actual} == ${expected}`);
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);