import React, {useEffect, useState} from 'react';

const Paragraph = () => {
  useEffect(() => {
    console.log('🚀 Paragraph');
    return () => console.log('🧹 Paragraph');
  }, []);

  return <p>보이나요</p>;
};

export default function UseEffectTest(): React.JSX.Element {
  const [foo, setFoo] = useState(0);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    console.log('🚀 depends on foo UseEffect');
    return () => console.log('🧹 depends on foo UseEffect');
  }, [foo]);

  useEffect(() => {
    console.log('🚀 no dependency UseEffect');
    return () => console.log('🧹 no dependency UseEffect');
  }, []);

  return (
    <section>
      <h2>useEffect 테스트</h2>
      <p>아무 값이나 설정한 state: {foo}</p>
      <button onClick={() => setRefresh(prev => !prev)}>Paragraph show toggle</button>
      {refresh ? <Paragraph /> : null}
      <br />
      <button onClick={() => setFoo(prev => ++prev)}>+1</button>
      <hr />
      <h4>설명:</h4>
      <p>
        useEffect의 정리 코드(cleanup code)는 컴포넌트가 dismount 될 때 실행되지만, state가 변경되어 리렌더링되는
        시점에도 실행된다.
      </p>
    </section>
  );
}
