/**
 * @file Immer 테스트 파일. state 업데이트 함수를 간결하게 작성할 수 있음
 */

import React, {useEffect, useState} from 'react';
import {produce, WritableDraft} from 'immer';

interface Item {
  seq: number;
  shape: string;
}

export default function ImmerTest2(): React.JSX.Element {
  const [list, setList] = useState<Item[]>([
    { seq: 1, shape: '🍎' },
    { seq: 2, shape: '🍌' },
    { seq: 3, shape: '🍊' },
    { seq: 4, shape: '🍇' }
  ]);

  function updateArray(index: number, replacement: string): void {
    setList(prev => produce(prev, draft => {
      if (draft[index]) {
        draft[index].shape = replacement;
      }
    }));
  }

  useEffect((): void => {
    console.log('list:', list);
  }, [list]);

  return (
    <section>
      <h2>Immer 테스트</h2>
      <ul>
        {list.map((item: Item, index: number) => (
          <li key={item.seq} className="list-item">
            <span>{item.shape}</span>
            <button
              className="mini"
              onClick={() => updateArray(index, '🍉')}
              aria-label={`아이템 ${item.seq}를 수박으로 변경하기`}
            >
              수박으로 변경하기
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
