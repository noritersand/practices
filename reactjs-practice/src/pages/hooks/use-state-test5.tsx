import React, {useState} from 'react';

export default function UseStateTest5(): React.JSX.Element {
  const [boolValue, setBoolValue] = useState<boolean>(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    console.log(typeof value); // string
    setBoolValue(value === 'true');
  }

  return (
    <article>
      <h2>useState Test #5</h2>
      <div>
        <label>
          <input type="radio" name="input" value="true"
            checked={boolValue === true} onChange={handleChange} />
          &nbsp;true
        </label>
        <label>
          <input type="radio" name="input" value="false"
                 checked={boolValue === false} onChange={handleChange} />
          &nbsp;false
        </label>
      </div>
    </article>
  );
}
