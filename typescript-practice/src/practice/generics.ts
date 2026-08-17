{
  // type StringArray = Array<string>;
  // let strArr: StringArray = ['a', 'b', 'c'];

  // type NumberArray = Array<number>;
  // let numArr: NumberArray = [1, 2, 3];
  // // numArr.push('4'); // ⛔ error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.

  // type ObjectWithNameArray = Array<{ name: string }>;
  // let objArr: ObjectWithNameArray = [{ name: '1' }, { name: '2' }];

  interface Backpack<Type> {
    contents: Array<Type>;

    add: (obj: Type) => void;
    get: () => Array<Type>;
  }

  // declare const backpack: Backpack<string>;
  const backpack: Backpack<string> = {
    contents: [],

    add: function (obj) {
      this.contents.push(obj);
    },
    get: function () {
      return this.contents;
    },
  }

  const object = backpack.get();
  console.log(object); // []

  backpack.add('23');
  console.log(object); // ['23']

  // backpack.add(23);
  // ⛔ error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.

  function identity<T>(arg: T) {
    console.log(arg);
  }
  identity<number>(1234);
  identity<string>('qwer');
  // identity<boolean>('false');
  // ⛔ error TS2345: Argument of type 'string' is not assignable to parameter of type 'boolean'.

  let map = new Map<string, string>();
  // map.set('key1', true);
  // ⛔ error TS2345: Argument of type 'boolean' is not assignable to parameter of type 'string'.

  // Promise 제네릭 예시
  function resolveAfter2Seconds(): Promise<string> {
    return new Promise<string>(resolve => {
      setTimeout(() => {
        resolve('done');
        // resolve(1234);
        // ⛔ error TS2345: Argument of type 'number' is not assignable to parameter of type 'string | PromiseLike<string>'.
      }, 2000);
    });
  }

}
