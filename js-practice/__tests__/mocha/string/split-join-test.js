import assert from 'assert';

let str = 'a.b.c|d.e.f|g.h.i';
let divided = str.split('|');

describe('test String.split()', () => {
  it('should be pass', () => {
    // assert.strictEqual(divided, expected);
    assert.deepStrictEqual(divided, ['a.b.c', 'd.e.f', 'g.h.i']); // deepStrictEqual은 배열 비교가 안됨
  });
});
