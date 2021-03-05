const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;

}



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

const words = ["ground", "control", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1, ["g", "c", "m", "t"]);