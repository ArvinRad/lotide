const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [] for [5]", () => {
    assert.deepEqual(middle([5]), []);
  });
  it("returns [] for [5, 8]", () => {
    assert.deepEqual(middle([5, 8]), []);
  });
  it("returns ['Lighthouse'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(middle(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse']);
  });
  it("returns [6, 9] for [5, 6, 9, 12]", () => {
    assert.deepEqual(middle([5, 6, 9, 12]), [6, 9]);
  });
});


