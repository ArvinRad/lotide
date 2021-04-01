
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
module.exports = flatten;
