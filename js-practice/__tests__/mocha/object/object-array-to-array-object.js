import assert from 'assert';

/**
 * 배열 name의 요소를 값으로, name을 키로 구성한 객체 배열(object[])을 만들어 반환
 * example: fn('a', [n1, n2]) => [{ a: n1 }, { a: n2 }]
 *
 * @param {string} name
 * @param {string[]} arr
 * @returns {object[]} 새로 구성한 객체 배열
 */
function objectArrayToArrayObject1(name, arr) {
  var resultArry = [];
  for (var i = 0; i < arr.length; i++) {
    var obj = {};
    obj[name] = arr[i];
    resultArry.push(obj);
  }
  return resultArry;
}

var result1 = objectArrayToArrayObject1('a', ['n1', 'n2']);
var result2 = objectArrayToArrayObject1('numbers', ['65', '64']);

describe('test objectArrayToArrayObject1()', () => {
  it('should be pass', () => {
    assert.deepStrictEqual(result1, [{a: 'n1'}, {a: 'n2'}]);
    assert.deepStrictEqual(result2, [{numbers: '65'}, {numbers: '64'}]);
  });
});

/**
 * names의 요소를 키로 하는 객체 배열(object[])을 만들어 반환한다.
 * 두 번째 파라미터부터 시작하는 배열의 개수는 제한이 없으나 names를 |로 구분했을 때의 숫자와 일치해야 함.
 * example: fn('name|value', ['a', 'b', 'c'], [12, 24, 48]) => [{ name: 'a', value: 12 }, { name: 'b', value: 24 }, { name: 'c', value: 48 }]
 *
 * @param {string} names 파이프로 구분되는 이름들
 * @param unnamedParameters arguments에서 꺼내쓰는 배열들
 * @return array
 */
function objectArrayToArrayObject2(names) {
  var names = names.split('|');
  if (names.length !== arguments.length - 1) {
    throw new Error('names의 길이와 전달인자의 개수가 일치하지 않습니다.');
  }
  for (var i = 1; i < names.length; i++) {
    if (arguments[i].constructor !== Array) {
      throw new Error('names를 제외한 전달인자는 배열만 지정할 수 있습니다.');
    }
    if (arguments[i + 1] && arguments[i].length !== arguments[i + 1].length) {
      throw new Error('모든 배열의 길이는 같아야 합니다.');
    }
  }
  var resultArry = [];
  for (var i = 0; i < arguments[1].length; i++) {
    var obj = {};
    for (var j = 0; j < names.length; j++) {
      obj[names[j]] = arguments[j + 1][i];
    }
    resultArry.push(obj);
  }
  for (var i = 1; i < arguments.length; i++) {
    if (arguments[i].constructor !== Array) {
      throw new Error('names를 제외한 전달인자는 배열만 지정할 수 있습니다.');
    }
  }
  return resultArry;
}

var result3 = objectArrayToArrayObject2('name|value', ['a', 'b', 'c'], [12, 24, 48]);
var result4 = objectArrayToArrayObject2(
  'alphabet|addOptNo|ordQty',
  ['a', 'b', 'c', 'd'],
  ['31', '64', '180', 'SE1123'],
  [2, 3, 10, 9]
);

describe('test objectArrayToArrayObject2()', () => {
  it('should be pass', () => {
    assert.deepStrictEqual(result3, [
      {name: 'a', value: 12},
      {name: 'b', value: 24},
      {name: 'c', value: 48}
    ]);
    assert.deepStrictEqual(result4, [
      {alphabet: 'a', addOptNo: '31', ordQty: 2},
      {alphabet: 'b', addOptNo: '64', ordQty: 3},
      {alphabet: 'c', addOptNo: '180', ordQty: 10},
      {alphabet: 'd', addOptNo: 'SE1123', ordQty: 9}
    ]);
  });
});
