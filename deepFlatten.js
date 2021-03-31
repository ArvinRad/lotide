const deepFlatten = function(array) {
  let newArray = [];
  array.forEach(item => {
    if (Array.isArray(item)) {
    newArray.push(...deepFlatten(item));
    } else {
    newArray.push(item);
    }
  });
  return newArray;
};

module.exports = deepFlatten;
