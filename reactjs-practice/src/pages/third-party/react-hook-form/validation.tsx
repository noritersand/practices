/**
 * @file validation.tsx
 * @constructor
 */
import {SubmitHandler, useForm} from 'react-hook-form';
import React from 'react';

type Inputs = {
  name: string;
  birthDate: string;
  gender: number;
  phoneNo: string;
};

export default function Validation(): React.JSX.Element {
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    reset,
    setValue,
    formState: {errors}
  } = useForm<Inputs>();

  function resetForm() {
    reset({
      name: '',
      birthDate: '',
      gender: 0,
      phoneNo: ''
    });
  }

  function handleFormKeydown(event: React.KeyboardEvent<HTMLFormElement>) {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  }

  function onSubmit(data): SubmitHandler<Inputs> {
    console.log('성공! data:', data);
    return null;
  }

  const onError = response => {
    if (Object.keys(response)) {
      alert(response[Object.keys(response)[0]].message);
    }
  };

  return (
    <section>
      <h2>Validation</h2>
      <form onSubmit={handleSubmit(onSubmit, onError)} onKeyDown={handleFormKeydown}>
        <table>
          <colgroup>
            <col style={{width: '160px'}} />
            <col />
            <col style={{width: '160px'}} />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <th>이름</th>
              <td>
                <input
                  type="text"
                  defaultValue="waldo"
                  maxLength={50}
                  {...register('name', {required: '이름은 필수값입니다.', maxLength: 50})}
                />{' '}
              </td>
              <th>생년월일</th>
              <td>
                <input
                  type="text"
                  maxLength={10}
                  {...register('birthDate', {
                    required: '생년월일은 필수값입니다.',
                    maxLength: 10
                  })}
                />
              </td>
            </tr>
            <tr>
              <th>성별</th>
              <td>
                <label>
                  <input type="radio" value={1} {...register('gender')} />
                  &nbsp;여성
                </label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label>
                  <input type="radio" value={0} {...register('gender')} />
                  &nbsp;남성
                </label>
              </td>
              <th>휴대폰번호</th>
              <td>
                <input
                  type="text"
                  maxLength={12}
                  {...register('phoneNo', {
                    required: '휴대폰번호는 필수값입니다.',
                    maxLength: 12,
                    pattern: /^[0-9]$/
                  })}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <button type="button" className="btns ver-large" onClick={resetForm}>
            리셋
          </button>
          <button type="submit" className="btns ver-large violetBtn mgl20px">
            저장
          </button>
        </div>
      </form>
    </section>
  );
}
