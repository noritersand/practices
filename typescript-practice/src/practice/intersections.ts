{
  type Person = { name: string; age: number };
  type Human = { breathing: boolean };

  let waldo: Person & Human;

  waldo = {
    name: 'waldo',
    age: 47,
    breathing: true,
  }; // O

  // waldo = {
  //   name: 'waldo',
  //   age: 47
  // };
  // ⛔ error TS2322: Type '{ name: string; age: number; }' is not assignable to type 'Person & Human'.
  // Property 'breathing' is missing in type '{ name: string; age: number; }' but required in type 'Human'.

  type Conflicting = number & string;

  let foo1: Conflicting;
  // foo1 = '123';
  // ⛔ error TS2322: Type 'string' is not assignable to type 'never'.
  // foo1 = 123;
  // ⛔ error TS2322: Type 'number' is not assignable to type 'never'.

}
