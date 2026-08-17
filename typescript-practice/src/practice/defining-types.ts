{
  // let foo: number = undefined; // not OK
  // ⛔ error TS2322: Type 'undefined' is not assignable to type 'number'.

  // const obj = {width: 10, height: 15};
  // const area = obj.width * obj.heigth; // typo in height
  // ⛔ error TS2551: Property 'heigth' does not exist on type '{ width: number; height: number; }'.
  // Did you mean 'height'?

  // let a = (4 // ⛔ error TS1005: ')' expected.

  interface User {
    name: string;
    id: number;
  }

  const user: User = {
    name: 'Hayes',
    id: 0,
  };

  // console.log(4 / []);
  // ⛔ error TS2363: The right-hand side of an arithmetic operation must be of type
  // 'any', 'number', 'bigint' or an enum type.

  class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
      this.name = name;
      this.id = id;
    }
  }

  const user2: User = new UserAccount('Murphy', 1);

  function add(a: number, b: number) {
    // ...
  }

  function sub(a: number, b: number): any {
    // ...
  }

  let arr: string[] = ['1', '2', '3'];
}
