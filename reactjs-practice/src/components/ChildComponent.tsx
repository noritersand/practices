/**
 * @file child-component.tsx
 * @author fixalot
 * @since 2024-11-20
 */

import React, {useEffect, useState} from 'react';

export default function ChildComponent({onReady, shouldStart}) {
  const [readySelf, setReadySelf] = useState<boolean>(false);

  useEffect(() => {
    if (!shouldStart) {
      return;
    }
    setReadySelf(false);
    const loadResources = async () => {
      console.log('Child Component Initializing...');
      await new Promise(resolve => setTimeout(resolve, 1000)); // 실제 처리 로직
      console.log('Child Component is ready!');
      onReady(); // 부모에게 준비 완료 알림
      setReadySelf(true);
    };
    loadResources();
  }, [shouldStart]);

  return (
    <div className="code-result">
      <h4>Child Component</h4>
      <p>readySelf: {readySelf.toString()}</p>
    </div>
  );
}
