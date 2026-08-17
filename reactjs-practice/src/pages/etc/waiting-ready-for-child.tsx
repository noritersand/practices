/**
 * @file use-ready-state-test.tsx
 * @author fixalot
 * @since 2024-11-20
 */

import React, {useEffect, useState} from 'react';
import ChildComponent from '../../components/ChildComponent';

export default function WaitingReadyForChild() {
  const [isChildReady, setIsChildReady] = useState(false);
  const [shouldStart, setShouldStart] = useState(false);
  const [executionHistory, setExecutionHistory] = useState([]);

  function startWaiting() {
    setIsChildReady(false);
    setShouldStart(true);
  }

  function onReady() {
    setIsChildReady(true);
  }

  function finalDestination() {
    console.log('Final Destination');
    setExecutionHistory(prev => [...prev, new Date().toISOString()]);
  }

  useEffect(() => {
    if (isChildReady && shouldStart) {
      finalDestination();
      setShouldStart(false);
    }
  }, [isChildReady, shouldStart]);

  return (
    <section>
      <h2>자식 컴포넌트의 준비 상태 기다리기</h2>
      <button onClick={startWaiting} style={{margin: '10px 0'}}>
        기다리기 시작
      </button>
      <div className="code-result">
        <h4>Parent Component</h4>
        <p>shouldStart: {shouldStart.toString()}</p>
        <p>isChildReady: {isChildReady.toString()}</p>
      </div>
      <ChildComponent onReady={onReady} shouldStart={shouldStart} />
      <p>기록:</p>
      <ul>
        {executionHistory.map(e => (
          <li key={e}>{e}</li>
        ))}
      </ul>
    </section>
  );
}
