import assert from 'assert';

// 소스 출처: http://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-money-in-javascript

/**
 * Number.prototype.format(n, x)
 *
 * @param {number} n length of decimal
 * @param {number} x length of sections
 */
Number.prototype.format = function (n, x) {
  var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
  return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
};

describe('test format()', () => {
  it('should be pass', () => {
    assert.strictEqual((1234).format(), '1,234');
    assert.strictEqual((1234).format(), '1,234');
    assert.strictEqual((12345).format(2), '12,345.00');
    assert.strictEqual((123456.7).format(3, 2), '12,34,56.700');
    assert.strictEqual((123456.789).format(2, 4), '12,3456.79');
  });
});

/**
 * Number.prototype.format2(fix, seperator, seperator2)
 *
 * @param {number} fix 포맷 적용할 숫자
 * @param {string} separator 소수점 구분자
 * @param {string} separator2 천 단위 구분자
 *
 * usage:
 *  - (123456).format2(0) // '123,456'
 *  - (123456).format2(2) // '123,456.00'
 *  - (123456).format2(2, '|') // '123,456|00'
 *  - (123456).format2(2, null, '|') // '123|456.00'
 */
Number.prototype.format2 = function (c, d, t) {
  var n = this,
    c = isNaN((c = Math.abs(c))) ? 2 : c,
    d = d == undefined ? '.' : d,
    t = t == undefined ? ',' : t,
    s = n < 0 ? '-' : '',
    i = String(parseInt((n = Math.abs(Number(n) || 0).toFixed(c)))),
    j = (j = i.length) > 3 ? j % 3 : 0;

  return (
    s +
    (j ? i.substr(0, j) + t : '') +
    i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + t) +
    (c
      ? d +
        Math.abs(n - i)
          .toFixed(c)
          .slice(2)
      : '')
  );
};

describe('test format2()', () => {
  it('should be pass', () => {
    assert.strictEqual((123456).format2(0), '123,456');
    assert.strictEqual((123456).format2(2), '123,456.00');
    assert.strictEqual((123456.789).format2(4), '123,456.7890');
    assert.strictEqual((123456).format2(2, '|'), '123,456|00');
    assert.strictEqual((123456).format2(2, null, '|'), '123|456.00');
  });
});

/**
 * Number.prototype.format3(n, x, s, c)
 *
 * @param {number} n length of decimal
 * @param {number} x length of whole part
 * @param {object} s sections delimiter
 * @param {object} c decimal delimiter
 */
Number.prototype.format3 = function (n, x, s, c) {
  var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
    num = this.toFixed(Math.max(0, ~~n));

  return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
};

describe('test format3()', () => {
  it('should be pass', () => {
    assert.strictEqual((12345678.9).format3(2, 3, '.', ','), '12.345.678,90');
    assert.strictEqual((123456.789).format3(4, 4, ' ', ':'), '12 3456:7890');
    assert.strictEqual((12345678.9).format3(0, 3, '-'), '12-345-679');
  });
});
