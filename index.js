// index.js
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const flatten = require('./flatten');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const findKey = require('./findKey');
const eqObjects = require('./eqObjects');
const eqArrays = require('./eqArrays');
const findKeyByValue = require('./findKeyByValue');
const map = require('./map');
const letterPositions = require('./letterPositions');
const takeUntil = require('./takeUntil');
const without = require('./without');


module.exports = {
  assertEqual: assertEqual,
  assertArraysEqual: assertArraysEqual,
  assertObjectsEqual: assertObjectsEqual,
  head: head,
  tail: tail,
  middle: middle,
  flatten: flatten,
  countLetters: countLetters,
  countOnly: countOnly,
  findKey: findKey,
  eqObjects: eqObjects,
  eqArrays: eqArrays,
  findKeyByVakue: findKeyByValue,
  map: map,
  letterPositions: letterPositions,
  takeUntil: takeUntil,
  without: without
};
