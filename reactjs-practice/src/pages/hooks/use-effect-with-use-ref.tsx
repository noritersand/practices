import React, {useEffect, useRef, useState} from 'react';

export default function UseEffectWithUseRefTest(): React.JSX.Element {
  const ref1 = useRef(0);
  const ref2 = useRef(0);

  const [rerenderTrigger, setRerenderTrigger] = useState(0);

  useEffect(() => {
    console.log('## ref1.current:', ref1.current);
  }, [ref1]);

  useEffect(() => {
    console.log('## ref2.current:', ref2.current);
  }, [ref2.current]);

  useEffect(() => {
    console.log('## rerenderTrigger:', rerenderTrigger);
  }, [rerenderTrigger]);

  return (
    <section>
      <h2>useEffect with useRef 테스트</h2>
      <button style={{margin: 1}} onClick={() => (ref1.current = ref1.current + 1)}>
        ref#1 +1
      </button>
      <button style={{margin: 1}} onClick={() => (ref2.current = ref2.current + 1)}>
        ref#2 +1
      </button>
      <button style={{margin: 1}} onClick={() => setRerenderTrigger(prev => prev + 1)}>
        리렌더링
      </button>
      <br />
      <div className="important">
        <p>
          ref나 ref.current의 변화는 useEffect에서 감지하지 못한다. ref 객체의 참조 동일성을
          보장하기 때문에, 최초 렌더링 외엔 작동하지 않는다.
        </p>
        <p>
          ref.current의 변화는 리렌더링을 유발하지 않기 때문에 이 값의 변화 자체로 로그가 출력되진
          않는다. 다만, rerenderTrigger의 변화로 리렌더링이 발생했을 때, ref.current 값이 변했다면
          그 때는 useEffect에서 감지한다.
        </p>
      </div>
    </section>
  );
}
