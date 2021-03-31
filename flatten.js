
const flatten = function (arr) {
  const output = arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      return acc.concat(...flatten(item));
    } else {
      return acc.concat(item);
    }
  }, []);
  return output;
};
modeule.exports
//console.log(flatten([1, 2, [3, 4], 5, [6]]));