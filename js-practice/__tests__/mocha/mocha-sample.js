import assert from 'assert';

describe('Mocha test', () => {
  var foo = 'bar';

  console.log('Hello world!');

  it('should be pass', () => {
    assert.strictEqual(foo, 'bar'); // 오른쪽이 기대값
  });
  // it('should be fail', () => {
  //   assert.strictEqual(foo, 'E');
  // });
  it('should be pass', () => {
    assert.ok(true);
    assert.ok(!false);
  });

  // 서브 테스트 슈트 #1
  describe('test strictEqual()', () => {
    it('should be pass', () => {
      assert.strictEqual(true, true);
      assert.strictEqual(false, false);

      assert.strictEqual(undefined, undefined);
      assert.strictEqual(null, null);

      assert.strictEqual('a', 'a');
      assert.strictEqual('', '');
      assert.strictEqual(' ', ' ');

      assert.strictEqual(1, 1);
      assert.strictEqual(1.2, 1.2);
      assert.strictEqual(-3, -3);
      assert.strictEqual(Infinity, Infinity);
      assert.strictEqual(-Infinity, -Infinity);

      assert.strictEqual(NaN, NaN);
    });
  });

  // 서브 테스트 슈트 #2
  describe('test notStrictEqual', () => {
    it('should be pass', () => {
      assert.notStrictEqual(new Date('2020-12-27'), new Date('2020-12-27'));
      assert.notStrictEqual(
        () => {},
        () => {}
      );
      assert.notStrictEqual({}, {});
      assert.notStrictEqual({a: 1}, {a: 1});
      assert.notStrictEqual([], []);
      assert.notStrictEqual([1, 2, 3], [1, 2, 3]);
      // 객체와 배열 비교는 strictEqual이 아니라 deepStrictEqual로 한다.
      assert.deepStrictEqual({}, {});
      assert.deepStrictEqual({a: 1}, {a: 1});
      assert.deepStrictEqual(new Date('2020-12-27'), new Date('2020-12-27'));
      assert.notDeepStrictEqual(
        () => {},
        () => {}
      ); // 함수는 요딴식으로 비교할 수 음슴
      assert.deepStrictEqual([], []);
      assert.deepStrictEqual([1, 2, 3], [1, 2, 3]);
      assert.deepStrictEqual([4, 5, 6], [4, 5, 6]);
    });
  });
});
