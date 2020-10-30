const assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

// Tests can appear before, after, or interspersed with your hooks.
// Hooks will run in the order they are defined, as appropriate;
// all before() hooks run (once), then any beforeEach() hooks, tests,
// any afterEach() hooks, and finally after() hooks (once).
describe('hooks', function() {
  before('some description', function() {
    // runs once before the first test in this block
  });

  after('some description', function() {
    // runs once after the last test in this block
  });

  beforeEach('some description', function() {
    // runs before each test in this block
  });

  afterEach('some description', function() {
    // runs after each test in this block
  });

  // test cases
});
