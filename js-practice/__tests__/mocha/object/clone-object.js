import assert from 'assert';

// 소스 출처: https://velog.io/@ddalpange/자바스크립트-객체-복사하기
/**
 * 깊은 객체 복사
 *
 * @param {object} obj
 */
function cloneObject(obj) {
  var clone = {};
  for (var i in obj) {
    if (typeof obj[i] == 'object' && obj[i] != null) {
      clone[i] = cloneObject(obj[i]);
    } else {
      clone[i] = obj[i];
    }
    // clone[i] = (typeof(obj[i]) == 'object' && obj[i] != null) ? cloneObject(obj[i]) : obj[i];
  }
  return clone;
}

let result1 = cloneObject({a: 1, b: 1});

let result2 = cloneObject({
  a: {e: 5, f: 7},
  b: {c: 3, d: 4}
});

let result3 = cloneObject({
  a: 1,
  b: {
    c: {
      d: {
        e: {
          f: 'hi'
        }
      }
    }
  }
});

function myFn() {}

let result4 = cloneObject({
  a: 1,
  fn: myFn
});

describe('test cloneObject()', () => {
  it('should be pass', () => {
    assert.deepStrictEqual(result1, {a: 1, b: 1});
    assert.deepStrictEqual(result2, {a: {e: 5, f: 7}, b: {c: 3, d: 4}});
    assert.deepStrictEqual(result3, {a: 1, b: {c: {d: {e: {f: 'hi'}}}}});
    assert.deepStrictEqual(result4, {a: 1, fn: myFn});
  });
});
