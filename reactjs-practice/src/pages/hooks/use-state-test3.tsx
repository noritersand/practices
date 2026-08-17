import React, {useEffect, useRef, useState} from 'react';

export default function UseStateTest3(): React.JSX.Element {
  const [list, setList] = useState([]);
  const seq = useRef(0);

  function justReset() {
    setList([]);
  }

  async function resetAndAdd() {
    setList([]);
    console.log('list:', list);
    let i = 0;
    while (i < 10) {
      await wait(200);
      addSomething(i);
      i++;
    }
  }

  function wait(ms) {
    return new Promise(resolve => setTimeout(() => {resolve(ms)}, ms))
  }

  function addSomething(i?: number) {
    setList(prev => [...prev, (i != null) ? i.toString() : (++seq.current).toString()]);
  }

  function findSomething() {
    addSomething();
    addSomething();
  }

  useEffect(() => {

  }, []);



  return (
    <article>
      <h2>useState Test #3</h2>
      <button onClick={findSomething}>찾기</button>
      <button onClick={resetAndAdd}>초기화</button>
      <ul>
        {
          list.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul>
    </article>
  )
}
