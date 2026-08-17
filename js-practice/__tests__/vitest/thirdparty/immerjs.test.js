/**
 * @file Immer.js 테스트
 */

import {expect, test} from 'vitest';
import {produce} from 'immer';

test('produce #1', () => {
  let original = {
    name: 'John',
    age: 32,
    address: {
      city: 'Seoul',
      country: 'Korea'
    }
  };

  let cloned = produce(original, draft => {
    draft.age = 33;
    draft.address.city = 'Busan';
  });

  // original 객체와 cloned 객체는 서로 다른 객체
  expect(original).not.toBe(cloned);

  // original의 프로퍼티 값은 변하지 않는다.
  expect(original.age).toBe(32);
  expect(original.address.city).toBe('Seoul');

  // cloned의 프로퍼티 값은 produce()에서 작성한 대로 변경되었음
  expect(cloned.age).toBe(33);
  expect(cloned.address.city).toBe('Busan');
});

test('not suitable to deep cloning #1', () => {
  let obj = {
    a: 1
  };

  let obj2 = {
    b: obj
  };

  let obj3 = produce(obj2, draft => {
    draft = {}; // 이렇게 draft에 새로운 객체를 할당해도
  });

  // obj2.b는 여전히 obj를 참조한다.
  expect(obj3.b).toBe(obj);
  expect(obj3.b === obj).toBeTruthy();

  // 심지어 아무 변화도 없음
  console.log('obj3:', obj3);
});

test('not suitable to deep cloning #2', () => {
  let obj = {
    a: 1
  };

  let obj2 = {
    b: obj
  };

  let obj3 = {
    c: obj2
  };

  let obj4 = produce(obj3, draft => {
    draft.c = {}; // draft의 프로퍼티에 새 객체를 할당하는 방식이라면?
  });

  // 이렇게 하면 뭔가 달라진 것 같지만?
  expect(obj4.c).not.toBe(obj2);

  // obj4.c가 텅텅 비어있게됨
  console.log('obj4:', obj4);
});
