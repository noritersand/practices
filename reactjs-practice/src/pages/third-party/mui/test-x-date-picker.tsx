/**
 * @file x-date-picker.tsx
 */
import React, {useState} from 'react';
import dayjs from 'dayjs';
import CustomDatePicker from '../../../components/CustomDatePicker';

export default function TestXDatePicker(): React.JSX.Element {
  const [r1, setR1] = useState(null);
  const [r2, setR2] = useState(null);
  const [r3, setR3] = useState(null);
  const [r4, setR4] = useState(null);

  const handleClickButton1 = () => {
    setR1(dayjs('2021-10-10'));
  };
  const handleClickButton2 = () => {
    setR2(dayjs());
  };
  const handleClickButton3 = () => {
    setR3(dayjs());
  };
  const handleClickButton4 = () => {
    setR4(dayjs());
  };

  return (
    <section>
      <h2>MUI X Date Picker 테스트</h2>
      <div>
        <button onClick={handleClickButton1}>버튼1</button>
        결과1: <CustomDatePicker value={r1} onChange={setR1} />
      </div>
      <div style={{marginTop: '10px'}}>
        <button onClick={handleClickButton2}>버튼2</button>
        결과2: <CustomDatePicker value={r2} onChange={setR2} />
      </div>
      <div style={{marginTop: '10px'}}>
        <button onClick={handleClickButton3}>버튼3</button>
        결과3: <CustomDatePicker value={r3} onChange={setR3} />
      </div>
      <div style={{marginTop: '10px'}}>
        <button onClick={handleClickButton4}>버튼4</button>
        결과4: <CustomDatePicker value={r4} onChange={setR4} />
      </div>
    </section>
  );
}
