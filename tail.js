const tail = function(array) {
  return array.slice(1, array.length);
};
const assertEqual = function(actual, expected) {
  console.log(actual);
  for (i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i] ) {
      return console.log("Not Working");
      break;
    };
  }; 
  if (i == actual.length) return console.log(actual);
};
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]); 