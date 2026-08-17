import assert from 'assert';

var arr = ['a', 'b', 'c'];

for (var ele1 in arr) {
  // do nothing
}
var result1 = arr[ele1];

for (let ele2 in arr) {
  // do nothing
}
var result2 = typeof ele2;

// var life-cycle test
for (var i = 0; i < 10; i++) {
  // do nothing
}
var result3 = i;

// let life-cycle test
for (let j = 0; j < 10; j++) {
  // do nothing
}
var result4 = typeof j;

describe('let testing', () => {
  it('should be pass', () => {
    assert.strictEqual(result1, 'c');
    assert.strictEqual(result2, 'undefined');
    assert.strictEqual(result3, 10); // var로 선언한 i는 for 밖에서도 유효하지만
    assert.strictEqual(result4, 'undefined'); // let으로 선언한 j는 사망해서 음슴
  });
});
