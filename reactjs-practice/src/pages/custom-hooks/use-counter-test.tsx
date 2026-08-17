import useCounter from '../../components/hooks/use-counter';
import React from 'react';

export default function UseCounterTest(): React.JSX.Element {
  const {count, increment, decrement, reset} = useCounter();

  return (
    <section>
      <h2>커스텀 훅 테스트: useCounter</h2>
      <p>count: {count}</p>
      <button onClick={increment}>increment</button>
      <br />
      <button onClick={decrement}>decrement</button>
      <br />
      <button onClick={reset}>reset</button>
    </section>
  );
}
