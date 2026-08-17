import React, {useState} from 'react';

export default function ScratchPad2(): React.JSX.Element {
  const [list, setList] = useState([]);

  return (
    <article>
      <h2>Scratch Pad #2</h2>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
