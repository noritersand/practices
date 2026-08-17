import React, {useReducer} from 'react';

export default function UseReducerTest3(): React.JSX.Element {
  const [count, dispatch] = useReducer(x => x + 1, 1);

  return (
    <section>
      <h2>useReducer 테스트 #3</h2>
      <p>state와 action은 무시하고 단순 호출</p>
      <p>count: {count}</p>
      <button onClick={dispatch}>Increment</button>
      <br />
    </section>
  );
}
