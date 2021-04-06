const countLetters = function(myString) {
  const result = {};
  for (const letter of myString) {
    if (result[letter]) {
      result[letter]++;
    } else {
      result[letter] = 1;
    }
  }
  delete result[' '];
  return result;
};

module.exports = countLetters;