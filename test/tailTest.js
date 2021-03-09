const tail = require('../tail');
const assertArraysEqual = require('../assertArraysEqual');
assertArraysEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]); 
assertArraysEqual(tail([3, 7, 6]), [7, 6]); 