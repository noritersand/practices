import assert from 'assert';

var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
var indexes1 = '';
var elements1 = '';
for (var i in arr) {
  // log('index:', i, ', element:', arr[i]);
  indexes1 += i;
  elements1 += arr[i];
}

var obj = {a: 6, b: 7, c: 8, d: 9};
var keys = '';
var values = '';
for (var i in obj) {
  keys += i;
  values += obj[i];
}

describe('test for-in statement', () => {
  it('test with array', () => {
    assert.strictEqual(indexes1, '0123456'); // for-in 에서 i는 배열의 인덱스임
    assert.strictEqual(elements1, 'abcdefg');
  });
  it('test with object', () => {
    assert.strictEqual(keys, 'abcd'); // 배열이 아닌 객체의 경우 i는 프로퍼티의 이름이다.
    assert.strictEqual(values, '6789');
  });
});
