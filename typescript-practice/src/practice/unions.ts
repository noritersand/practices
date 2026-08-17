{
  type FullObject = {name: string; age: number};
  type EmptyObject = {};

  let whetherOrNot: FullObject | EmptyObject;

  whetherOrNot = {
    name: 'Jack',
    age: 32
  };

  whetherOrNot = {};

  whetherOrNot = {
    name: 'Jack'
  };

  type Person = {name: string; age: number};
  type Human = {breathing: boolean};

  let waldo: Person | Human;

  waldo = {
    name: 'Waldo',
    age: 47,
    breathing: true
  }; // OK

  waldo = {
    breathing: true
  }; // OK

  // waldo = {
  //   age: 12
  // };
  // ⛔ error TS2322: Type '{ age: number; }' is not assignable to type 'Person | Human'. Property 'name' is missing in type '{ age: number; }' but required in type 'Person'.

  // waldo = {
  //   hello: 'Hello there!'
  // };
  // ⛔ error TS2353: Object literal may only specify known properties, and 'hello' does not exist in type 'Person | Human'.

}
