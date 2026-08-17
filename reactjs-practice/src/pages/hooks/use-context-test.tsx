/**
 * @file use-context.tsx
 */
import React from 'react';
import ButtonForUseContext from '../../components/ButtonForUseContext';
import ParagraphForUseContext from '../../components/ParagraphForUseContext';
import FooProvider from '../../components/FooProvider';

export default function UseContextTest(): React.JSX.Element {
  return (
    <section>
      <h2>useContext 테스트</h2>
      <FooProvider>
        <div>
          <ButtonForUseContext>이 버튼이나</ButtonForUseContext>
        </div>
        <div>
          <ButtonForUseContext>이 버튼을 누르면 값이 증가함</ButtonForUseContext>
        </div>
        <div>
          <ParagraphForUseContext />
        </div>
      </FooProvider>
      <ButtonForUseContext>여긴 안됨</ButtonForUseContext>
    </section>
  );
}
