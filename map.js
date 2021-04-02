const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;

}

const assertArraysEqual = require('./assertArraysEqual');


const words = ["ground", "control", "major", "tom"];
const results1 = map(words, word => word[0]);

assertArraysEqual(results1, ["g", "c", "m", "t"]);
assertArraysEqual(map(words, word => word.replace('o', '@@')), ["gr@@und", "c@@ntrol", "maj@@r", "t@@m"]);