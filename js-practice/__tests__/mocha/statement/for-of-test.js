import assert from 'assert';

let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
let result1 = '';
for (let ele of arr) {
  result1 += ele;
}
let result2 = '';
for (let ele in arr) {
  result2 += ele;
}

describe('test for-of statement', () => {
  it('should be pass', () => {
    assert.strictEqual(result1, 'abcdefg'); // for-of는 객체의 값을 꺼냄
    assert.strictEqual(result2, '0123456'); // 반면 for-in은 객체의 인덱스를 꺼냄
  });
  it('should be error', () => {
    let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
    // for (let ele of obj) {} // TypeError: obj is not iterable
    // 단, for-of는 iterable한 객체에만 사용할 수 있다. plain object를 돌리면 에러남.
  });
});
