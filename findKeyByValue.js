const flatten = require('./flatten');
const findKeyByValue = function(myObject, value) {
  let myArr = flatten(Object.entries(myObject));
  let result = undefined;
  if (myArr.includes(value)) {
    result = myArr[myArr.indexOf(value) - 1];
  }
  return result;
};

module.exports = findKeyByValue;