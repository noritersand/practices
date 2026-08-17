/**
 * @file 코파일럿 테스트용 파일
 *
 * #### 단축키
 *
 * - `alt + \`: 코파일럿 발동
 * - `tab`: 코파일럿 제안 선택
 * - `ctrl + enter`: 자동 완성 제안 창 보기
 * - `ctrl + w`: 자동 완성 제안 창 닫기
 * - `ctrl + shift + i`: 코파일럿 빠른 채팅 열기. 원래 이건 크로미엄 요소 검사 단축키인데 무시됨
 * - `alt + shift + p`: 사이드 바의 코파일럿 뷰 포커싱
 * - `ctrl + i`: 코파일럿 인라인 챗 열기
 *
 * ```
 * function fn() {
 *  console.log('Hello, world!');
 * }
 * ```
 *
 * ### 에이전트
 *
 * `@`으로 에이전트를 지정하여 질문할 수 있음
 *
 * - `@terminal`: 터미널 명령어에 대해 질문할 때 사용
 * - `@vscode`: VSCode의 설정 관련 질문할 때 사용
 * - `@workspace`: 워크스페이스의 파일에 대한 질문을 할 때, 가령 어떤 파일을 찾아달라고 할 때 사용함
 *
 * ### 슬래시 명령어
 *
 * - `/explain`: 특정 코드를 설명해달라고 할 때 사용함. 코드를 드래그한 상태에서 사용하면, 드래그 영역 내의 코드만 설명해줌
 * - `/doc`: doc 코멘트를 자동으로 작성해줌
 * - `/fix`: 코드를 수정해달라고 할 때 사용함
 * - `/tests`: 테스트 코드를 작성해달라고 할 때 사용함
 */

/**
 * @desc multiplicationTable 함수는 주어진 숫자 n에 대한 곱셈 테이블을 생성한다.
 * @param {number} n - 곱셈 테이블의 크기를 나타내는 양의 정수
 * @returns {void}
 */
function multiplicationTable(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}

multiplicationTable(99);

/**
 * @desc 주어진 숫자 base의 0 제곱부터 32 제곱까지 출력 (base^0 ~ base^32)
 * @param {number} base - 거듭제곱의 밑이 되는 숫자
 * @returns {void}
 */
function power(base) {
  console.log(`${base} ^ 0 =`, 0);
  let result = base;
  console.log(`${base} ^ 1 =`, result);
  for (let i = 2; i <= 32; i++) {
    result *= base;
    console.log(`${base} ^ ${i} =`, result);
  }
}

power(2);

// 뭐라도 아무거나
// 코파일럿이 뭔가 제안을 해줘야 하는데 아무것도 안해주네
function sayHello() {
  console.log('Hello!');
}

sayHello();
