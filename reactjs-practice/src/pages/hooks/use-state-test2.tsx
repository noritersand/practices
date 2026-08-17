import React, {useEffect, useState} from 'react';

let charArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

export default function UseStateTest2(): React.JSX.Element {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending(p => p + 1);
    await delay(1000);
    setPending(p => p - 1);
    setCompleted(c => c + 1);
  }

  return (
    <article>
      <h2>useState Test #2</h2>
      <h4>
        Pending: {pending}
      </h4>
      <h4>
        Completed: {completed}
      </h4>
      <button onClick={handleClick}>1초 후에 1씩 증가시켜 달라구</button>
    </article>
  );
}

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
