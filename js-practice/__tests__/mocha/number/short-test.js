import assert from 'assert';

// 소스 출처: http://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-money-in-javascript

function test1(n) {
  // return n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  return n.toFixed(2).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,');
}

describe('test test1()', () => {
  it('should be pass', () => {
    assert.strictEqual(test1(1), '1.00');
    assert.strictEqual(test1(12), '12.00');
    assert.strictEqual(test1(123), '123.00');
    assert.strictEqual(test1(1234), '1,234.00');
    assert.strictEqual(test1(12345), '12,345.00');
    assert.strictEqual(test1(123456), '123,456.00');
    assert.strictEqual(test1(1234567), '1,234,567.00');
    assert.strictEqual(test1(12345.67), '12,345.67');
    assert.strictEqual(test1(1234.567), '1,234.57'); // ???
  });
});

function test2(n) {
  return n.toFixed(2).replace(/./g, function (c, i, a) {
    return i && c !== '.' && (a.length - i) % 3 === 0 ? ',' + c : c;
  });
}

describe('test test2()', () => {
  it('should be pass', () => {
    assert.strictEqual(test2(1), '1.00');
    assert.strictEqual(test2(12), '12.00');
    assert.strictEqual(test2(123), '123.00');
    assert.strictEqual(test2(1234), '1,234.00');
    assert.strictEqual(test2(12345), '12,345.00');
    assert.strictEqual(test2(123456), '123,456.00');
    assert.strictEqual(test2(1234567), '1,234,567.00');
    assert.strictEqual(test2(12345.67), '12,345.67');
    assert.strictEqual(test2(1234.567), '1,234.57'); // ???
  });
});
