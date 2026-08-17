import React, {ReactNode} from 'react';

function Child({value1, value2, children}) {
  return (
    <div>
      <h3>Child</h3>
      <p>value1: {value1}</p>
      <p>value2: {value2}</p>
      {children}
    </div>
  );
}

function SecondChild(props: {value1: string; value2: string; children: ReactNode}) {
  return (
    <div>
      <h3>SecondChild</h3>
      <GrandChild {...props} />
    </div>
  );
}

function GrandChild({value1, value2, children}) {
  return (
    <div>
      <p>value1: {value1}</p>
      <p>value2: {value2}</p>
      {children}
    </div>
  );
}

export default function PropsTest(): React.JSX.Element {
  console.log('Parent rendered');

  return (
    <section>
      <h2>props 테스트</h2>
      <Child value1={'값1-1'} value2={'값2-1'}>
        <p>Hello world!</p>
      </Child>
      <SecondChild value1={'값1-2'} value2={'값2-2'}>
        <p>Hello world too!</p>
      </SecondChild>
    </section>
  );
}
