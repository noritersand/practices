import React, {useEffect} from 'react';
import { useScript } from "@uidotdev/usehooks";

export default function UseScriptTest(): React.JSX.Element {
  const loadingStatus = useScript('https://code.jquery.com/jquery-1.12.4.min.js');

  useEffect(() => {
    if (loadingStatus === "ready") {
      // 스크립트 로딩 완료 후 실행할 코드
      console.log('## jQuery version:', window.jQuery('body').jquery);
    }
  }, [loadingStatus]);

  return (
    <section>
      <h2>useHooks: useScript() test</h2>
      <p>hello</p>
    </section>
  );
}
