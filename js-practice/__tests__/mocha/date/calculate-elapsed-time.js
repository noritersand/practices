import assert from 'assert';

describe('경과 시간 테스트', () => {
  it('test#1', () => {
    let start = new Date('2016-01-01');
    let end = new Date('2016-01-03');
    let elapsedtime = end - start;
    assert.ok(elapsedtime == end.getTime() - start.getTime());
    assert.ok(172800000 == elapsedtime);
    assert.ok(0 == new Date(elapsedtime).getMonth());
    assert.ok(3 == new Date(elapsedtime).getDate());
  });
  it('test#2', () => {
    let start = new Date('2016-01-01');
    let end = new Date('2016-02-04');
    let elapsedtime = end - start;
    assert.ok(1 == new Date(elapsedtime).getMonth());
    assert.ok(4 == new Date(elapsedtime).getDate());
  });
  it('test#3', () => {
    let start = new Date('2016-02-01');
    let end = new Date('2016-02-04');
    let elapsedtime = end - start;
    assert.strictEqual(elapsedtime, 259200000);
    let devideResult = elapsedtime / 1000 / 60 / 60 / 24; // 날짜로 변환
    assert.ok(3 === devideResult);
    assert.ok(3 === Math.floor(devideResult));
  });
});
