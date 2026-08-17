import assert from 'assert';

/**
 * target에서 comparand와 일치하는 프로퍼티를 찾아 제거한다.
 * targetKeys와 comparandKeys를 기준으로 일치하는지를 판단한다.
 * target과 comparand이 '[{a = 1, b = 2}]' 같은 형태의 object array일 때만 정상 작동한다.
 *
 * example: fn(target, comparand, 'loginId|userName', 'loginId|userName');
 *
 * @param target (object) comparand와 비교해 중복을 제거할 대상
 * @param comparand (object) 비교 대상
 * @param targetKeys (string) 비교 기준이되는 프로퍼티의 이름을 지정한다. 하나 이상일땐 파이프로 구분한다.
 * @param comparandKeys (string) target과 comparand의 프로퍼티가 다를 때 지정한다. 생략하면 targetKeys를 사용한다.
 */
function removeDuplicatedProperties(target, comparand, targetKeys, comparandKeys) {
  var targetKeyArr = targetKeys.split('|');
  var originKeyArr = (comparandKeys && comparandKeys.split('|')) || targetKeyArr;
  if (targetKeyArr.length != originKeyArr.length) {
    throw new Error('targetKey와 originKey의 길이가 다릅니다.');
  }
  var keysLen = targetKeyArr.length;
  for (var i = 0; i < target.length; i++) {
    for (var j = 0; j < comparand.length; j++) {
      var equalCount = 0;
      for (var k = 0; k < keysLen; k++) {
        if (target[i][targetKeyArr[k]] == comparand[j][originKeyArr[k]]) {
          equalCount++;
        }
      }
      if (equalCount == keysLen) {
        target.splice(i, 1);
        i--;
        break;
      }
    }
  }
}

var target = [
  {
    proditNo: 'IT300',
    opt1No: 1,
    opt1Nm: '색상',
    opt1Val: '빨강',
    opt2No: 2,
    opt2Nm: '사이즈',
    opt2Val: '스몰',
    opt3No: 0,
    opt4No: 0,
    opt5No: 0
  },
  {
    proditNo: 'IT303',
    opt1No: 1,
    opt1Nm: '색상',
    opt1Val: '파랑',
    opt2No: 2,
    opt2Nm: '사이즈',
    opt2Val: '미디움',
    opt3No: 0,
    opt4No: 0,
    opt5No: 0
  }
];
var comparand = [
  {
    proditNo: 'IT303',
    opt1No: 1,
    opt1Nm: '색상',
    opt1Val: '파랑',
    opt2No: 2,
    opt2Nm: '사이즈',
    opt2Val: '미디움',
    opt3No: 0,
    opt4No: 0,
    opt5No: 0
  },
  {
    proditNo: 'IT302',
    opt1No: 1,
    opt1Nm: '색상',
    opt1Val: '파랑',
    opt2No: 2,
    opt2Nm: '사이즈',
    opt2Val: '스몰',
    opt3No: 0,
    opt4No: 0,
    opt5No: 0
  },
  {
    proditNo: 'IT301',
    opt1No: 1,
    opt1Nm: '색상',
    opt1Val: '빨강',
    opt2No: 2,
    opt2Nm: '사이즈',
    opt2Val: '미디움',
    opt3No: 0,
    opt4No: 0,
    opt5No: 0
  }
];

// target이랑 comparand를 비교해서 opt1Val과 opt2Val이 일치하는 object가 있으면 target에서 삭제하는 함수임.
removeDuplicatedProperties(target, comparand, 'opt1Val|opt2Val');

describe('test removeDuplicatedProperties()', () => {
  it('should be pass', () => {
    assert.deepStrictEqual(target, [
      {
        proditNo: 'IT300',
        opt1No: 1,
        opt1Nm: '색상',
        opt1Val: '빨강',
        opt2No: 2,
        opt2Nm: '사이즈',
        opt2Val: '스몰',
        opt3No: 0,
        opt4No: 0,
        opt5No: 0
      }
    ]);
  });
});
