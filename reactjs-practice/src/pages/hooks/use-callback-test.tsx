/**
 * @file use-callback.tsx
 */

import React, {useCallback, useRef, useState} from 'react';

export default function UseCallbackTest(): React.JSX.Element {
  const [foo, setFoo] = useState('');
  const [refresh, setRefresh] = useState(true);

  const callback = useCallback(() => {
    return foo;
  }, [refresh]);

  const callback2 = useCallback(() => {
    anotherFunction();
  }, []);
  const count = useRef(0);

  function anotherFunction() {
    count.current++;
    console.log('hello #' + count.current);
  }

  return (
    <>
      <section>
        <h2>useCallback 테스트</h2>
        <section>
          <h3>test #1</h3>
          <div className="code-result">
            <p>
              foo state is <b>{foo}</b>
            </p>
            foo: <input type="text" value={foo} onChange={e => setFoo(e.target.value)} />
            <br />
            <p>
              And callback returns <b>{callback()}</b>
            </p>
            <button onClick={() => setRefresh(prev => !prev)}>callback refresh toggle</button>
          </div>
          <p>
            버튼을 누르기 전에는 callback()에서 참조하는 foo의 값이 변화하지 않는다. (실제로는
            변했어도)
          </p>
        </section>
        <hr />
        <section>
          <h3>test #2</h3>
          <div className="code-result">
            <button onClick={callback2}>execute callback2</button>
          </div>
        </section>
      </section>
    </>
  );
}
