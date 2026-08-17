import {PI} from './src/constant';

console.log("Hello via Bun!");
console.log('PI:', PI);

function fn(n: number) {
  console.log('n:', n);
}

// fn(null); // ⛔ error TS2345: Argument of type 'null' is not assignable to parameter of type 'number'.
// let foo: number = null; // ⛔ error TS2322: Type 'null' is not assignable to type 'number'.
