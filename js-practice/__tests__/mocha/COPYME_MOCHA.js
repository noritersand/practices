import assert from 'assert';

var foo = 'bar';

describe('description', () => {
  it('exceptions', () => {
    assert.ok(!false);
  });
  it('#1', () => {
    assert.strictEqual(foo, 'bar');
  });
});
