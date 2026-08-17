import React, {useRef} from 'react';

export default function UseRefWithDom(): React.JSX.Element {
  const myRef = useRef(null);
  const focusInput = () => myRef.current.focus();

  return (
    <section>
      <h2>useRef를 DOM 객체와 연결하기</h2>
      <input type="text" ref={myRef} />
      &nbsp;
      <button onClick={focusInput}>focus input</button>
    </section>
  );
}
