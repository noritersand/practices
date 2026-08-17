import React, {useMemo, useState} from 'react';

export default function UseMemoTest(): React.JSX.Element {
  console.log('UseMemoTest 렌더링됨');
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState(0);

  const cachedValue = useMemo(() => {
    console.log('useMemo 실행됨');
    let complexValue = Number(value1) + Number(value2);
    return complexValue;
  }, [value1, value2]);

  const rerender = () => {
    setValue3(prev => ++prev);
  };

  return (
    <section>
      <h2>useMemo 테스트</h2>
      <div>
        <input value={value1} onChange={e => setValue1(e.target.value)} />
        <input value={value2} onChange={e => setValue2(e.target.value)} />
        <p>{cachedValue}</p>
      </div>
      <button onClick={rerender}>리렌더링</button>
    </section>
  );
}
