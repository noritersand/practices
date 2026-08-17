import {expect, test} from 'vitest';
import SHA3 from 'sha3';

test('sha3 모듈 테스트 #1 SHA3-512', () => {
  const sha3 = new SHA3(512);
  sha3.update('encode-me');
  const hash = sha3.digest('hex');

  expect(hash).toBe(
    '93acbd67a4d26d4922ea317223667f3f6ec7b40ed4e2a4686619742dcffe5e27a37e918a8a2a3268b14d220fc71795897d8af1ed2faf6ba7b73b5755d405f31e'
  );
});

test('sha3 모듈 테스트 #2 SHA3-512 소금친 거', () => {
  const sha3 = new SHA3(512); // 인스턴스 새로 만들어야지 위에 있는 hash 재사용하면 digest() 결과가 달라짐
  sha3.update('encode-me$salt');
  const hash = sha3.digest('hex');

  expect(hash).toBe(
    'd1a4b9de8b68c0eabf52cab937a567c0cb49ba1393ec90cb7322e72283db7d3b1893dd18253aa7bb1ebd357549867ba8f6a9c9608fe99681f0edb9b2c651e680'
  );
});

test('sha3 모듈 테스트 #3 xptmxm1!', () => {
  const sha3 = new SHA3(512);
  sha3.update('xptmxm1!');
  const hash = sha3.digest('hex');

  expect(hash).toBe(
    '4592a9aefaf68645efdf90a0c62742ef5f97e59aceaf537b87ddad0f3f1eb2e96cd201c097cf43ad31c4980238866506e4484116f152b141d5b1a48d6b78f053'
  );
});

test('sha3 모듈 테스트 #4 qAzXsW2!', () => {
  const sha3 = new SHA3(512);
  sha3.update('qAzXsW2!');
  const hash = sha3.digest('hex');

  expect(hash).toBe(
    '8809e980683e1d564214858dea683746edf396b525f8f9654cc8d8fb456b30009d47d84823b8b7359c9a485491dfdc63e54eac2206583106936c30523533d8d9'
  );
});
