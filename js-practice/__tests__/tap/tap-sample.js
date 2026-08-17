/**
 * @file
 *  <p>Node.js 테스트 프레임웍 Node Tap 사용 예시</p>
 *  <p>공식 메뉴얼: https://node-tap.org/docs/api/</p>
 *
 * @author fixalot
 * @since 2023-10-20
 */

import tap from 'tap';

// tap.equal(): 일치(===)하는지 판단함.
let n = 10 / 2;
tap.equal(n, 5);

// tap.not(): 불일치(===)한지 판단
tap.not(n, 10);

// 일치 연산이므로 타입까지 완전히 같아야 함
tap.equal(1, 1);
tap.not(1, '1');

// tap.same()
//
// - https://node-tap.org/docs/api/asserts/#tsamefound-wanted-message-extra
//
// tap.same()은 동등 연산(==), tap.strictSame()은 일치 연산(===)
//
// -- https://node-tap.org/docs/api/asserts/#tsamefound-wanted-message-extra
// 둘 다 깊은 비교(deeply)를 한다는 점은 같음
tap.same(1, '1');
tap.strictNotSame(1, '1');

// Asserts API 들은 셋 혹은 네 개의 파라미터를 받는데, 마지막 두 개는 아래와 같음
//
// tap.ok(obj, message, extra):
// - message: 테스트 케이스의 이름
// - extra: object
//   - todo: '해야 하는' 혹은 '보류 중' 테스트를 표시함. 이 항목이 true이거나 문자열이면 테스트 실패했더라도 FAIL이 아니라 TODO로 표시됨. 문자열인 경우 true와 같지만, 왜 TODO인지를 설명하는 텍스트로 테스트 결과에 표시됨.
//   - skip: 생략 대상인 테스트를 표시함. 이 항목이 true거나 문자열이면 테스트를 생략한다. 문자열이면 왜 SKIP인지 설명하는 텍스트로 테스트 결과에 표시됨.
//   - diagnostic: true인 경우 테스트 결과에 상관없이 yaml 진단 블록(diagnostic block)을 표시함... 라고 메뉴얼에 써있지만, 설명과 다르게 PASS면 진단 블록이 표시되지 않으며, false일 때와 비교했을 때 FAIL인 테스트에 한해서 좀 더 상세히 출력하는 기능으로 보인다. 또 기본값으 true인 것으로 추정됨.
// - https://node-tap.org/docs/api/asserts/#tokobj-message-extra

// API: Asserts
tap.ok(true, 'name of the test', {
  todo: false,
  skip: false,
  diagnostic: false
});

tap.notOk(false);

// tap.error({});
// tap.error(new Error('custom'));

// tap.test(name, options, function): 서브 테스트 생성 메서드.
tap.test('예상치 못한 오류 테스트', sub => {
  // 예상치 못한 오류를 일으키는 코드
  try {
    // 오류를 일으키는 코드 예시
    throw new Error('이것은 예상치 못한 오류입니다.');
  } catch (error) {
    // tap.error(obj, message, extra)): obj가 error면 테스트 실패로 간주함
    // ?? 무슨 용도로 써야할지 모르겠음
    // 아래 코멘트 라인 해제하면 테스트 실패함
    // sub.error(error, '예상치 못한 오류가 발생했습니다.');
  }

  // tap.end(): 서브 테스트가 끝났음을 알림
  // tap.test()의 콜백함수에선 tap.end()를 반드시 호출해야 함
  sub.end();
});

// tap.pass():
// - https://node-tap.org/docs/api/#tpassmessage

// tap.fail():
// - https://node-tap.org/docs/api/#tfailmessage-extra

// tap.pass(), tap.fail()은 PASS 혹은 FAIL 테스트 포인트를 방출(emit)하는 메서드라고 함.
function emit(success) {
  (success && tap.pass()) || tap.fail();
}

emit(true);
