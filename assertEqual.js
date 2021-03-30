const assertEqual = function(actual, expected) {
  let myMessage = "";
  if (actual === expected) {
    myMessage = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    myMessage = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
  return console.log(myMessage);
};
module.exports = assertEqual;
