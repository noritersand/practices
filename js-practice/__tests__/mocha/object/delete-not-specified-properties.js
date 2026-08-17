import assert from 'assert';

/**
 * 문자열 배열인 propNames에서 언급되지 않은 프로퍼티들을 삭제한다.
 *
 * @param {object} obj
 * @param {string[]} propNames
 */
function deleteNotSpecifiedProperties(obj, propNames) {
  for (var i in obj) {
    var cnt = 0;
    for (var j in propNames) {
      if (propNames[j] == i) {
        cnt++;
        break;
      }
    }
    if (cnt == 0) {
      delete obj[i];
    }
  }
}

var deleteMe1 = {
  selected: 1,
  status: 'U',
  usrNo: 10278,
  loginId: 'admin132',
  usrNm: '관리자132',
  passwd: 'ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f',
  deptNo: 10002,
  lwrEntpNo: 0,
  regrId: '10101',
  regDts: '',
  modrId: '12345678',
  modDts: ''
};
deleteNotSpecifiedProperties(deleteMe1, ['status', 'usrNo', 'passwd']); // 지정한 프로퍼티만 골라냄

function fn() {}

var deleteMe2 = {
  aaa: 1,
  bbb: fn
};
deleteNotSpecifiedProperties(deleteMe2, ['aaa']);

describe('test deleteNotSpecifiedProperties()', () => {
  it('should be pass', () => {
    assert.deepStrictEqual(deleteMe1, {
      status: 'U',
      usrNo: 10278,
      passwd: 'ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f'
    });
    assert.deepStrictEqual(deleteMe2, {aaa: 1});
    assert.ok(typeof fn == 'function'); // 프로퍼티에서 지운거지 객체 자체가 사라지는건 아니다
  });
});
