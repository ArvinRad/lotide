const without = function(source, itemToRemove) {
  i = 0;
  while (i < source.length) {
    for(element of itemToRemove) {
      if (source[i] === element) {
        source.splice(i,1);
      }
    }
    i++
  }
  return source;
}
// Tests:
//console.log(without([1, 2, 3], [1])); // => [2, 3]
//console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
//const words = ["hello", "world", "lighthouse"];
//console.log(without(words, ["lighthouse"]));
