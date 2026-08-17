import React, {useState} from 'react';
import styles from '../../styles/container.module.css';

export default function InputCheckbox(): React.JSX.Element {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const handleChange = event => {
    console.log('handleChange', event.target.checked);
    setChecked1(event.target.checked);
    // event.stopPropagation(); // change는 전파되지 않으므로 소용 없음
  };
  const handleClick = event => {
    console.log('handleClick', event.target.checked);
    setChecked2(event.target.checked);
    event.stopPropagation(); // 여길 막으면 div로 click 이벤트 전파됨(버블링)
  };
  const handleDivClick = event => {
    console.log('div clicked');
  };

  return (
    <section>
      <h2>리액트에서 체크박스는 어떻게 작동하는가?</h2>
      <div className={styles.childContainer} onClick={handleDivClick}>
        <input
          type="checkbox"
          checked={checked1}
          onChange={handleChange}
          onClick={handleClick}
          style={{width: '40px', height: '40px'}}
        />
      </div>
      <p>
        checked1: <strong>{checked1 ? 'true' : 'false'}</strong>
      </p>
      <p>
        checked2: <strong>{checked2 ? 'true' : 'false'}</strong>
      </p>
    </section>
  );
}
