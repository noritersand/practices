import assert from 'assert';

var product = {
  type: 'product',
  productId: 'A1010',
  nodeId: '655',
  unitList: [
    {
      type: 'unit',
      nodeId: '65504',
      unitName: 'red',
      children: [
        {
          type: 'unit',
          nodeId: '6550401',
          unitName: 'magenta'
        },
        {
          type: 'unit',
          nodeId: '6550402',
          unitName: 'cyan'
        }
      ]
    },
    {
      type: 'unit',
      nodeId: '65505',
      unitName: 'black',
      child: {
        type: 'unit',
        nodeId: '6550601',
        unitName: 'gray',
        child: {
          type: 'unit',
          nodeId: '655060198',
          unitName: 'white'
        }
      }
    }
  ]
};

/**
 * sourceObject를 재귀탐색해서 이름이 일치하는 프로퍼티를 모두 찾는다.
 *
 * @param {object} sourceObject 탐색할 객체
 * @param {string} searchName 탐색할 프로퍼티명
 * @return {array} name과 이름이 일치하는 프로퍼티의 값을 배열로 반환.
 */
function findValues(sourceObject, searchName) {
  'use strict';
  var stack = [];

  function recursion(sourceObject, searchName) {
    for (var name in sourceObject) {
      var element = sourceObject[name];
      if (typeof element === 'object') {
        recursion(element, searchName);
      } else if (name === searchName) {
        stack.push(element);
      }
    }
  }

  recursion(sourceObject, searchName);
  return stack;
}

describe('test findValues()', () => {
  it('should be pass', () => {
    assert.deepStrictEqual(findValues(product, 'nodeId'), [
      '655',
      '65504',
      '6550401',
      '6550402',
      '65505',
      '6550601',
      '655060198'
    ]);
  });
});

/**
 * sourceObject를 재귀탐색해서 이름과 값이 파라미터와 일치하는 객체를 모두 찾는다.
 *
 * @param {object} sourceObject 탐색할 객체
 * @param {string} searchName 탐색할 프로퍼티명
 * @param {string} searchValue 탐색할 프로퍼티의 값
 * @return {array} name과 value가 일치하는 프로퍼티를 소유한 객체를 배열로 반환.
 */
function findObjects(sourceObject, searchName, searchValue) {
  'use strict';
  var valueType = typeof searchValue;
  var stack = [];

  function recursion(sourceObject, searchName, searchValue) {
    for (var name in sourceObject) {
      var element = sourceObject[name];
      var elementType = typeof element;
      if (elementType === 'object') {
        var foundOne = recursion(element, searchName, searchValue);
        if (foundOne) {
          return foundOne;
        }
      } else if (elementType !== valueType) {
        continue;
      } else if (name === searchName && element == searchValue) {
        stack.push(sourceObject);
      }
    }
  }

  recursion(sourceObject, searchName, searchValue);
  return stack;
}

describe('test findObjects()', () => {
  it('findObjects #1', () => {
    // 마젠타 찾기
    var result = findObjects(product, 'unitName', 'magenta');
    assert.deepStrictEqual(result, [{type: 'unit', nodeId: '6550401', unitName: 'magenta'}]);
  });
  it('findObjects #2', () => {
    // 흰색 컬러 옵션 찾기
    var result = findObjects(product, 'unitName', 'white');
    assert.deepStrictEqual(result, [{type: 'unit', nodeId: '655060198', unitName: 'white'}]);
  });
  it('findObjects #3', () => {
    var temp = findObjects(product, 'type', 'unit');
    var result = findObjects(temp, 'unitName', 'black');
    assert.deepStrictEqual(result, [
      {
        child: {
          child: {
            nodeId: '655060198',
            type: 'unit',
            unitName: 'white'
          },
          nodeId: '6550601',
          type: 'unit',
          unitName: 'gray'
        },
        nodeId: '65505',
        type: 'unit',
        unitName: 'black'
      }
    ]);
  });
});

/**
 * sourceObject를 재귀탐색해서 searchObject를 소유한 객체(=부모)를 찾는다.
 *
 * @param {object} sourceObject
 * @param {object} searchObject
 * @return {object} searchObject의 부모
 */
function findContainsObject(sourceObject, searchObject) {
  'use strict';
  if (sourceObject === searchObject) {
    return true;
  }
  for (var name in sourceObject) {
    var element = sourceObject[name];
    var propType = typeof element;
    if (propType !== 'object') {
      continue;
    }
    if (Array.isArray(element)) {
      for (var index in element) {
        var found = findContainsObject(element[index], searchObject);
        if (found) {
          return found === true ? sourceObject : found;
        }
      }
    } else {
      var found = findContainsObject(element, searchObject);
      if (found) {
        return found === true ? sourceObject : found;
      }
    }
  }
}

describe('test findContainsObject()', () => {
  it('findContainsObject() #1', () => {
    var parent = findContainsObject(product, product.unitList[0].children[1]);
    assert.deepStrictEqual(parent, {
      type: 'unit',
      nodeId: '65504',
      unitName: 'red',
      children: [
        {type: 'unit', nodeId: '6550401', unitName: 'magenta'},
        {type: 'unit', nodeId: '6550402', unitName: 'cyan'}
      ]
    });
  });
  it('findContainsObject() #2', () => {
    var parent = findContainsObject(product, product.unitList[1].child.child);
    assert.deepStrictEqual(parent, {
      type: 'unit',
      nodeId: '6550601',
      unitName: 'gray',
      child: {type: 'unit', nodeId: '655060198', unitName: 'white'}
    });
  });
});
