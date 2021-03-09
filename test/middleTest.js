const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
assertArraysEqual(middle([5, 6, 7, 10]), [6, 7]);
assertArraysEqual(middle(["Hello", "Lighthouse", "Labs"]), ["Lighthouse"]);
assertArraysEqual(middle([5]), []);