const findKey = function (object, callback) {
  let i = 0;
  let result = "Undifined";
  let values = Object.values(object)
  while (i < values.length) {
    if(callback(values[i])) {
      result = Object.keys(object)[i];
      break;
    }
    i++;
  }
  return result;
}

const results = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"


const assertEqual = require('./assertEqual');

assertEqual(results, "noma");
