const takeUntil = function(array, callback) {
  let i = 0;
  result = [];
  while (i < array.length) {
    if(callback(array[i])) {
      break;
    } else result.push(array[i]);
    i++;
  }
  return result;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

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
}

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]);