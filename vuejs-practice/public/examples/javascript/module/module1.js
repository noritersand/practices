// // module1.js
// export const a = 1, b = '2';
// export let obj = { a, b };

// // module1.js
// var c = 'cfoot';
// var d = 'dorat?';

// export { c, d };

// module1.js
// export class Newbie {
//   levelUp() {
//     console.log('I feel stronger.');
//   }
// }

// export const { str1, str2: bar } = { str1: 'abc', str2: 'def'};

// import fn2 from './module2.js';

// export { fn2 };
// export { fn2 } from './module2.js';
// export { obj } from './module2.js';

// export function fn() {
//   console.log('hello');
// }

// import { PI } from './module2.js';
// export { PI };

// export { ZERO } from './module2.js';

// export const ZERO = 0;
// export const ONE = 1;
// export const PI = 3.14;
// export const GOLDEN_RATIO = 1.618;
// export const KAPREKA_NNUMBER = '495, 6174';

// function fn() {
//   console.log('Oh hello there!');
// }
// export { fn as default };

// module1.js

export let a = 1;

const b = 2;
export { b };

export function fn() {
  return 'Hello world!';
}
