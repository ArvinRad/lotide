const countLetters = require("./countLetters");

const countOnly = function(allItems, itemToCount) {
  let result = {};
  for (item of allItems) {
    if (itemToCount[item] === true) {
      if (result[item]) {
        result[item]++
      } else {
        result[item] = 1;
      }
    }
  }
  return result;
};

module.exports = countOnly;