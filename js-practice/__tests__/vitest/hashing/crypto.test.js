import {expect, test} from 'vitest';
import crypto from 'crypto';

test('crypto 모듈 테스트 #1 SHA3-512', () => {
  const plainText = 'encode-me';
  const hash = crypto.createHash('sha512').update(plainText).digest('hex');
  expect(hash).toBe(
    '920b031ce2d6540ff376b0fb98ad24e28233524b4eacb326d385dae37c20be47b6f9dbf7b2c4c924874163b5490e4888dd64c8cf014d501a4ff1470d96136d0c'
  );
});

test('crypto 모듈 테스트 #2 SHA3-512 소금친 거', () => {
  const plainText = 'encode-me$salt';
  const hash = crypto.createHash('sha512').update(plainText).digest('hex');
  expect(hash).toBe(
    '83b9d6beeb32cc146d76d1b3c476d3cc64bb8a57db25328da00fcb6d7e6f535b9acb72302b52603e06ef2e1b6d8e4ab99bbbe1b17dd9ca7b6c35a626d3eb0e9d'
  );
});

test('crypto 모듈 테스트 #3 xptmxm1!', () => {
  const plainText = 'xptmxm1!';
  const hash = crypto.createHash('sha512').update(plainText).digest('hex');
  expect(hash).toBe(
    '4ecb3faa0e087f186085eeae87389bb84c840e214871600844e36bfbbcf01258db78f430542e5afaaf3fb5294d78f471a4022c554b3285c0222d2feaef1e34d5'
  );
});

test('crypto 모듈 테스트 #4 qAzXsW2!', () => {
  const plainText = 'qAzXsW2!';
  const hash = crypto.createHash('sha512').update(plainText).digest('hex');
  expect(hash).toBe(
    '835b5d437d8cdbd203166d7b750b780213cbf3ef93b562e5d694816bd67aafb656ab75ba02d837078bd1b45c2822ebc4189389b528d327003c0a406867ab3237'
  );
});
