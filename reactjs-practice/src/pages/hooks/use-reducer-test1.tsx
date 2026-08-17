import React, {useReducer} from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error('Unknown action type');
  }
}

export default function UseReducerTest1(): React.JSX.Element {
  const [state, dispatch] = useReducer(reducer, {count: 0});

  return (
    <section>
      <h2>useReducer 테스트 #1</h2>
      <p>일반적인 사용법</p>
      <p>state.count: {state.count}</p>
      <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
      <br />
      <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
    </section>
  );
}
