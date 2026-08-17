/**
 * @file Immer 테스트 파일. state 업데이트 함수를 간결하게 작성할 수 있음
 */

import React, {useEffect, useState} from 'react';
import {produce} from 'immer';

interface SubItem {
  shape: string;
}

interface Item {
  seq: number;
  subItem: SubItem;
}

export default function ImmerTest1(): React.JSX.Element {
  const [item, setItem] = useState<Item>({
    seq: 1,
    subItem: {
      shape: '🍎'
    }
  });

  function updateObject(replacement: string): void {
    setItem(prev => produce(prev, draft => {
      draft.subItem.shape = replacement
    }));
  }

  useEffect((): void => {
    console.log('item:', item);
  }, [item]);

  return (
    <section>
      <h2>Immer 테스트</h2>
      <span>{item.subItem.shape}</span>
      <button
        className="mini"
        onClick={() => updateObject('🍉')}
        aria-label={`아이템을 수박으로 변경하기`}
      >
        수박으로 변경하기
      </button>
    </section>
  );
}
