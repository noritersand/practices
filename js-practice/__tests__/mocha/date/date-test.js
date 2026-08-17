import assert from 'assert';

// add date
let instance = new Date();
// log('instance:', instance.toISOString());
instance.setDate(instance.getDate() + 1);
// log('instance + 1day:', instance.toISOString());

describe('Date 테스트', () => {
  it('toISOString()', () => {
    let isoDate = new Date('2018-01-01T12:24:48Z');
    assert.strictEqual(isoDate.toISOString(), '2018-01-01T12:24:48.000Z');
  });
  it('toLocaleString()', () => {
    let localeDate = new Date('2018-01-01 12:24:48');
    assert.strictEqual(localeDate.toLocaleString(), '2018. 1. 1. 오후 12:24:48');
    let koreanTimeZone = new Date('2016-02-05T09:00:00.000+09:00');
    assert.strictEqual(koreanTimeZone.toLocaleString(), '2016. 2. 5. 오전 9:00:00');
  });
});
