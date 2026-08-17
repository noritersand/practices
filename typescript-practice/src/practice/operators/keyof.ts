{
  type AType = {
    a: string;
    b: number;
  }

  let foo: keyof AType;
  foo = 'a';
  foo = 'b';
  // foo = 'c'; // ⛔ error TS2322: Type '"c"' is not assignable to type 'keyof AType'.

  interface BType {
    c: boolean;
    d: string[];
  }

  let foo2: keyof BType;
  foo2 = 'c';
  foo2 = 'd';
  // foo2 = 'g'; // Type '"g"' is not assignable to type 'keyof BType'.

  type Person3 = {
    name: string;
    age: number;
    city: string;
  };

  const person3: Person3 = {
    name: 'John',
    age: 30,
    city: 'New York',
  };

  function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  getProperty(person3, 'name'); // John
  getProperty(person3, 'age'); // 30
  getProperty(person3, 'city'); // New York

  type TupleType = [string, number, boolean];
  let tuple: TupleType;
  tuple = ['a', 1, true];

  type KeyOfTuple = keyof TupleType;
  // KeyOfTuple의 결과는: 0 | 1 | 2 | 'length' | 'toString' | 'pop' | ... (등 Array prototype의 메서드들)
  // Array.prototype의 메서드들과 함께, 숫자 리터럴 타입도 포함됨

  let keyOfTuple: KeyOfTuple = 0;
  keyOfTuple = 1;
  keyOfTuple = 2;
  keyOfTuple = 'length';
  keyOfTuple = 'forEach';
  keyOfTuple = 'pop';

  // 배열의 프로퍼티나 메서드에 'false'는 없음ㄴ
  // keyOfTuple = false; // ⛔ TS2322: Type false is not assignable to type keyof TupleType

  // 배열의 프로퍼티나 메서드에 'substring'은 없음
  // keyOfTuple = 'substring' // ⛔ TS2322: Type "substring" is not assignable to type keyof TupleType
}
