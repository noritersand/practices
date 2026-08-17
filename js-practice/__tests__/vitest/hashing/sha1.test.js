import {expect, test} from 'vitest';
import sha1 from 'sha1';

test('sha 모듈 테스트 #1 SHA-512', () => {
  const hash = sha1('encode-me');
  expect(hash).toBe(
    '8200b6ba3af35c5bdf5c3e186cdbabf7fb35de3d'
  );
});

test('sha 모듈 테스트 #2 SHA-512 소금친 거', () => {
  const hash = sha1('encode-me$salt');
  expect(hash).toBe(
    'fa039254db62634fa99eab2f35f6b4861525f089'
  );
});
