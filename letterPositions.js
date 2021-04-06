const letterPositions = function(myString) {
  const result = {};
  for (let i = 0; i < myString.length; i++) {
    if (Object.keys(result).includes(myString.charAt(i))) {
      result[myString.charAt(i)].push(i);
    } else {
      result[myString.charAt(i)] = [i];
    }
  }
  delete result[' '];
  return result;
};
module.exports = letterPositions;
