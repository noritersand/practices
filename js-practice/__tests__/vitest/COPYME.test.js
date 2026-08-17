/**
 * @file 이 파일을 복사해서 테스트 파일 만들것
 */

import {beforeEach, describe, expect, it, test} from 'vitest';

test('description', () => {
  const n = 1;
  expect(n).toBe(1);
});

function add(a, b) {
  return a + b;
}

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
