import assert from 'assert';

// describe(테스트 슈트) 없이 그냥 하면?
assert.ok(true); // 결과 창에 표시되지 않음

// it(테스트 케이스) 없이 하면?
describe('without it', () => {
  assert.ok(true); // 이것도 결과 창에 표시되지 않음
});

// 하지만 실패하는 코드는 AssertionError를 던지기 때문에 일반 에러와 똑같은 현상 발생함(코드 실행 중단, 에러 메시지와 호출 스택 출력)
// assert.ok(false); // 이 코멘트 라인을 해제하면 테스트 시 에러 발생함
// describe('without it #2', () => { // 얘
// assert.ok(false); // 네
// }); // 도

// --------------------------------------------------
