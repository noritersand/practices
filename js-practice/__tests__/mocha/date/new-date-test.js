import assert from 'assert';

describe('new Date() 테스트', () => {
  it('applicable format: yyyy-MM-dd', () => {
    // create instance by ISO format
    assert.ok(isFinite(new Date('2011-12-30').getTime())); // valid
  });
  it('applicable format: yyyy/MM/dd', () => {
    assert.ok(isFinite(new Date('2011/12/30').getTime())); // valid
  });
  it('not applicable format: yyyyMMdd', () => {
    assert.ok(isNaN(new Date('20111230').getTime())); // invalid date
  });
  it('not applicable format: dd-MM-yyyy', () => {
    assert.ok(isNaN(new Date('30-12-2011').getTime())); // invalid date
  });
});
