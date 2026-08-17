import React, {useReducer} from 'react';

const initialState = {
  name: '',
  age: 0
};

// 리듀서 함수
function reducer(state, action) {
  switch (action.keyName) {
    case 'name':
      return {...state, name: action.payload};
    case 'age':
      return {...state, age: action.payload};
    case 'reset':
      return initialState;
    default:
      throw new Error('Unknown action keyName');
  }
}

export default function UseReducerTest2(): React.JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <section>
      <h2>useReducer 테스트 #2</h2>
      <p>객체 타입의 상태 관리하기</p>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={state.name}
            onChange={e => dispatch({keyName: 'name', payload: e.target.value})}
          />
        </label>
      </div>
      <div>
        <label>
          Age:
          <input
            type="number"
            value={state.age}
            onChange={e => dispatch({keyName: 'age', payload: Number(e.target.value)})}
          />
        </label>
      </div>
      <div>
        <button onClick={() => dispatch({keyName: 'reset'})}>Reset</button>
      </div>
      <div>
        <p>Name: {state.name}</p>
        <p>Age: {state.age}</p>
      </div>
    </section>
  );
}
