const head = function(array) {
  return array[0];
};
const assertEqual = function(actual, expected) {
  if (actual === expected ) {
    return console.log(`Head: ${actual}`);
  } 
  else return console.log("Undefined");
};
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 5);