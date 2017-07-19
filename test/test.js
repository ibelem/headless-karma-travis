const expect = chai.expect;
const assert = chai.assert;

describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return 3 when the value is present', () => {
      assert.equal(3, [1,2,3,4].indexOf(4));
    });
  });
});
