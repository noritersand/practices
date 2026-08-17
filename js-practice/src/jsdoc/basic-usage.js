/**
 * @file 기본 사용법
 *
 * 이 아래는 아무거나 써보는 마크다운 플러그인 테스트용 코멘트
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
 * @author fixalot
 * @since 2023-10-20
 */

/**
 * @param {Date} myDate The date
 * @param {string} myString The string
 * @param {boolean} myFlag The flag
 * @param {string|number} myArg I dunno
 * @returns {string|Object} return string or number
 */
function myFunction(myDate, myString, myFlag, myArg) {
  // do stuff
}

/**
 * Returns the sum of a and b
 * @param {number} a
 * @param {number} b
 * @returns {Promise} Promise object represents the sum of a and b
 */
function sumAsync(a, b) {
  return Promise.resolve(a + b);
}

/**
 * 푸-바
 *
 * @type {string}
 */
const foo = 'bar';

/**
 * 넘버
 *
 * @type {number}
 */
let n = 1;

/**
 * 부울리언
 *
 * @type {boolean}
 */
var b = true;

/**
 * @desc 표시값의 앞이나 뒤에 지정한 값을 이어붙임
 *
 * 예시:
 *
 * {
 *   header: '케릭터이름',
 *   name: 'chaName',
 *   renderer: {
 *     type: PreSuffixRenderer,
 *     options: { prefix: '로켓단', suffix: '나옹이다옹' }
 *   }
 * }
 */
export class PreSuffixRenderer extends Renderer {
  // ...

  constructor(options) {
    super(options);
    this.prefix = options.prefix;
    this.suffix = options.suffix;
  }
}

/**
 * @desc 숫자를 통화 형식으로 변환
 *
 * ```
 * getCurrency(1234567890) // '1,234,567,890'
 * ```
 *
 * @param value
 * @returns {string} 숫자, 쉼표, 점으로 이뤄진 문자열
 */
export function getCurrency(value) {
  // ...
}
