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
module.exports = without;
