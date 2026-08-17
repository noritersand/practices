import assert from 'assert';

/**
 * queryString 형태의 txt를 object로 변환해 반환한다.
 *
 * @param {string} txt 변환 대상. 반드시 queryString 형태의 문자열이어야 한다.
 * @returns {object[]} txt를 변환한 object
 */
function convertQuerystringToJSON(txt) {
  var params = txt.split('&');
  var objArry = [];
  for (var i in params) {
    var ele = params[i];
    var splitEle = ele.split('=');
    var obj = {};
    obj[splitEle[0]] = splitEle[1];
    objArry.push(obj);
  }
  return objArry;
}

var querystring = 'proditNo=IT369&proditNo=IT371&proditNo=IT370';
var result1 = convertQuerystringToJSON(querystring);

describe('test convertQuerystringToJSON()', () => {
  it('should be pass', () => {
    assert.deepStrictEqual(result1, [
      {proditNo: 'IT369'},
      {proditNo: 'IT371'},
      {proditNo: 'IT370'}
    ]);
  });
});
