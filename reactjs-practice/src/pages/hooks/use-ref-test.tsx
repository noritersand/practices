import React, {useRef, useState, useEffect} from 'react';

export default function UseRefTest(): React.JSX.Element {
  const someRef = useRef(0);
  const [someState, setSomeState] = useState(0);

  function log() {
    console.log('someRef.current:', someRef.current);
  }

  return (
    <section>
      <h2>useRef 테스트</h2>
      <button
        style={{margin: 1}}
        onClick={() => {
          setSomeState(prev => prev + 1);
        }}
      >
        state +1
      </button>
      <button
        style={{margin: 1}}
        onClick={() => {
          someRef.current++;
        }}
      >
        ref +1
      </button>
      <button style={{margin: 1}} onClick={log}>
        console.log(ref)
      </button>
      <br />
      <br />
      someState: {someState}
      <br />
      someRef: {someRef.current}
      <br />
      <br />
      <div className="important">
        <p>state +1 버튼은 누를 때마다 someState 값이 증가하고 화면이 렌더링된다.</p>
        <p>
          ref +1 버튼은 누를 때마다 someRef 값이 증가하긴 하지만 화면 렌더링이 발생하진 않는다.
          증가시킨 값은 someRef.current에 즉시 반영되는 걸 확인할 수 있다. (콘솔 출력 버튼 눌러볼
          것)
        </p>
      </div>
    </section>
  );
}
