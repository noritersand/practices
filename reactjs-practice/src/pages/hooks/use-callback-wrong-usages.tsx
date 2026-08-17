/**
 * @file use-callback.tsx
 */

import React, {useCallback, useEffect, useState} from 'react';

export default function UseCallbackWrongUsages(): React.JSX.Element {
  const [foo, setFoo] = useState('');
  const [flag, setFlag] = useState(false);

  function featureFunction() {
    setFlag(foo === '');
  }

  function bridge() {
    featureFunction();
  }

  const wrongFunction = useCallback(() => {
    bridge();
  }, []); // <-- 문제를 해소하려면 의존성 배열로 foo가 추가되어야 함

  useEffect(() => {
    console.log('rendered');
    wrongFunction();
  }, [foo]);

  return (
    <>
      <section>
        <h2>useCallback의 잘못된 사용 사례</h2>
        <section>
          <h3>함수의 클로저</h3>
          <div className="code-result">
            foo: <input type="text" value={foo} onChange={e => setFoo(e.target.value)} />
            <br />
            <p>❓foo는 빈 문자열인가: {flag ? '예' : '아니오'}</p>
          </div>
          <p>
            '예'는 절대 '아니오'로 변하지 않는다. useCallback으로 생성된 wrongFunction이 최초 렌더링
            시점의 foo 값을 '캡처'하기 때문이다.
          </p>
        </section>
      </section>
    </>
  );
}
