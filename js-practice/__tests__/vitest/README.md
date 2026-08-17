# Vitest 도움말

- [Getting Started | Guide | Vitest](https://vitest.dev/guide/)


## 테스트 케이스 작성법

- 테스트 케이스는 `test()` 안에 작성한다.
- 여러 테스트 케이스를 하나의 블록(혹은 슈트)으로 묶으려면 `describe()` 안에 작성한다.
- `it()`은 `test()`의 별칭이다.

예시:

```js
test('one is one', () => {
  expect(1).toBe(1);
});
```

```js
describe('add 함수', () => {
  let result;
  beforeEach(() => {
    result = 0; // 각 테스트 전에 초기화
  });

  it('두 수를 더한다', () => {
    result = add(2, 3);
    expect(result).toBe(5);
  });
});
```

`describe()`는 테스트 케이스를 슈트로 묶어 그룹화, 설명, 특정 슈트 실행/건너뛰기를 위한 도구일 뿐, 그 외에 별도의 기능은 없다. 테스트 로직 자체는 `it()`이나 `test()`가 담당하며, `describe()`는 구조화와 가독성을 위한 보조적인 역할이다.


## true, false 체크는 그냥 true, false로

믿기 힘들겠지만, `.toBe(true)` 는 `.true` 와 같다:

```js
expect(true).toBe(true); // ✅

expect(true).true; // ✅
expect(false).false; // ✅

expect(2 === 2).false; // ❌
```


## toBe()와 toEqual()의 차이

`toBe()`는 값이나 객체의 주소를 비교하고, `toEqual()`은 값이나 객체의 내용을 비교한다.


## 부정문

부정문(not to be)는 `.not` modifier를 사용한다.

```js
expect(original).not.toBe(cloned);
```
 
