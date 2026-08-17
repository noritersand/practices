import React, {useEffect, useRef, useState} from 'react';

function Child({value1, value2, value3, value4}) {
  console.log('Child rendered');

  useEffect(() => {
    console.log('value1 inside of child:', value1);
  }, [value1]);

  useEffect(() => {
    console.log('value2 inside of child:', value2);
  }, [value2]);

  useEffect(() => {
    console.log('value3 inside of child:', value3);
  }, [value3]);

  useEffect(() => {
    console.log('value4 inside of child:', value4);
  }, [value4]);

  const [stateValue2] = useState(value2);

  return (
    <section>
      <h3>Child</h3>
      <p>value1: {value1}</p>
      <p>value2: {stateValue2}</p>
      <p>value3: {value3}</p>
      <p>value4: {value4}</p>
    </section>
  );
}

export default function PropsWithRendering(): React.JSX.Element {
  console.log('Parent rendered');

  let value1 = 0;
  const changeValue1 = () => {
    value1 = ++value1;
    console.log('changeValue1 called');
  };

  let value2 = 0;
  const changeValue2 = () => {
    value2 = ++value2;
    console.log('changeValue2 called');
  };

  const value3 = useRef(0);
  const changeValue3 = () => {
    value3.current = ++value3.current;
    console.log('changeValue3 called');
  };

  const [value4, setValue4] = useState(0);
  const changeValue4 = () => {
    setValue4(prev => ++prev);
    console.log('changeValue4 called');
  };

  return (
    <article>
      <h2>props의 변경이 렌더링에 미치는 영향</h2>
      <button onClick={changeValue1}>단순 변수 버전</button>
      <br />
      <button onClick={changeValue2}>useRef 버전</button>
      <br />
      <button onClick={changeValue3}>단순 변수 + Child에서 state 등록</button>
      <br />
      <button onClick={changeValue4}>단순 변수 + 부모 컴포넌트에서 state 등록</button>
      <Child value1={value1} value2={value2} value3={value3.current} value4={value4} />
      <div className={'important'}>
        <p>
          위의 버튼들은 props로 상속시킨 값 0을 1씩 증가시키는 버튼이다. Child에서는 useEffect로
          값의 변화를 콘솔에 출력하고 있음.
        </p>
        <ul>
          <li>value1, value2, value3, value4 모두 부모 컴포넌트가 props로 내려주는 값이다.</li>
          <li>
            이 중 value1, value2는 부모의 로컬 변수로 선언한 값이고, Child는 value2 값을 내부
            state로 등록했다.
          </li>
          <li>value3은 부모에서 ref로, value4는 부모에서 state로 등록된 값이다.</li>
          <li>
            부모의 value1, value2, value3은 값을 변경해도 렌더링을 유발하지 않는다. state가 아니기
            때문이며, 렌더링이 일어나지 않기 때문에 Child도 props의 변경을 인지할 수 없다.
          </li>
          <li>
            value4는 값 변경 시 컴포넌트 리렌더링을 유발하며, Child에 증가된 값이 전달된다. 따라서
            화면에서 값 변경을 즉시 확인할 수 있다.
          </li>
          <li>
            value3은 ref로 등록했기 때문에, 렌더링을 유발하진 않지만 값이 초기화되지는 않는다.
            따라서 value4의 변화가 발생하면 value3의 최신 값도 확인 가능하다.
          </li>
        </ul>
        <p>
          결론: Child에서 상속받은 props의 변경을 인지하려면, 부모 컴포넌트에서 해당 값을 state로
          등록하고 상태를 업데이트해야 함.
        </p>
      </div>
    </article>
  );
}
