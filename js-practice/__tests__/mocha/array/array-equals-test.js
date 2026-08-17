import assert from 'assert';

let arr = [1, 2, 3];
let other = [1, 2, 3];
let another = [4, 5, 6];

describe('배열 동등 연산 테스트', () => {
  it('should be false', () => {
    assert.ok(arr != other);
    assert.ok(arr != another);
    assert.ok(other != another);
  });
});

// TODO
