import React, {useEffect, useState} from 'react';

export default function UnifiedUseState(): React.JSX.Element {
  const [values, setValues] = useState({
    value1: '',
    value2: '',
    value3: false,
    value4: ''
  });

  const reset = () => {
    setValues({
      value1: '',
      value2: '',
      value3: false,
      value4: ''
    });
  };

  const handleValueChange = (name, value) => {
    setValues(prev => ({...prev, [name]: value}));
  };

  const handleCheckboxChange = name => {
    setValues(prev => ({...prev, [name]: !prev[name]})); // 체크박스 값 토글
  };

  useEffect(() => {
    console.log('values:', values);
  }, [values]);

  return (
    <section>
      <h2>하나의 객체로 여러 상태를 관리하는 방법</h2>
      <div>
        <span>value1: </span>
        <input
          type="text"
          value={values.value1}
          onChange={e => handleValueChange('value1', e.target.value)}
        />
        <hr />
        <span>value2: </span>
        <label>
          <input
            type="radio"
            name="value2"
            value="option1"
            checked={values.value2 === 'option1'}
            onChange={e => handleValueChange('value2', e.target.value)}
          />
          &nbsp;option1
        </label>
        &nbsp;&nbsp;
        <label>
          <input
            type="radio"
            name="value2"
            value="option2"
            checked={values.value2 === 'option2'}
            onChange={e => handleValueChange('value2', e.target.value)}
          />
          &nbsp;option2
        </label>
        &nbsp;&nbsp;
        <hr />
        <span>value3: </span>
        <label>
          <input
            type="checkbox"
            checked={values.value3}
            onChange={() => handleCheckboxChange('value3')}
          />
          &nbsp;true
        </label>
        <hr />
        <span>value4: </span>
        <select value={values.value4} onChange={e => handleValueChange('value4', e.target.value)}>
          <option value="">선택</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <hr />
        <ul>
          {Object.keys(values).map(key => (
            <li key={key}>
              {key}: {String(values[key])}
            </li>
          ))}
        </ul>
        <br />
        <button onClick={reset}>RESET</button>
      </div>
    </section>
  );
}
