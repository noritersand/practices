import React, {useEffect, useState} from 'react';

function wait(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default function UseStateTest1(): React.JSX.Element {
  const [list, setList] = useState<number[]>([]);

  useEffect(() => {
    fillList();
  }, []);

  async function fillList() {
    let i = 0;
    while (i < 10) {
      await wait(100); // <-- await이 없으면 set 함수 실행이 배치 처리되어 화면에 10이 열 개 출력됨
      setList(prev => [...prev, i]);
      i++;
    }
  }

  return (
    <article>
      <h2>useState Test #1</h2>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
