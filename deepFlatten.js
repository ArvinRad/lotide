const deepFlatten = function(array) {
  let newArray = [];

  const addItem = function(newArray, item) {
    if (Array.isArray(item)) {
      item.forEach(subItem => {
        addItem(newArray,subItem);
      });
    } else {
      newArray.push(item);
    };
    return newArray;
  };

  array.forEach(item => {
    addItem(newArray,item);
  });
  return newArray;
}
module.exports = deepFlatten;