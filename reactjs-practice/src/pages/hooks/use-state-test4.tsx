import React, {useEffect, useState} from 'react';

export default function UseStateTest4(): React.JSX.Element {
  const [list, setList] = useState([
    {seq: 1, shape: '🍎'},
    {seq: 2, shape: '🍌'},
    {seq: 3, shape: '🍊'},
    {seq: 4, shape: '🍇'}
  ]);

  function updateArray(index: number, replacement: string) {
    setList(prev =>
      prev.map((item, idx) => {
        if (idx === index) {
          return {
            ...item,
            shape: replacement
          };
        }
        return item;
      })
    );
  }

  useEffect(() => {
    console.log('list:', list);
  }, [list]);

  return (
    <article>
      <h2>useState Test #4</h2>
      <ul>
        {list.map((item, index) => (
          <div style={{display: 'flex'}} key={item.seq}>
            <li style={{fontSize: 20}}>{item.shape}</li>
            <button className="mini" onClick={() => updateArray(index, '🍉')}>수박으로 변경하기</button>
          </div>
        ))}
      </ul>
    </article>
  );
}
