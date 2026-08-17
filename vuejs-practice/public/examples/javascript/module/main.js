// // main.js
// import { a, b, obj } from './module1.js';

// console.log(a); // 1
// console.log(b); // 2
// console.log(JSON.stringify(obj)); // {"a":1,"b":"2"}

// // main.js
// import { c as foot, d as doratman } from './module1.js';

// console.log(foot); // cfoot
// console.log(doratman); // dorat?

// main.js
// import { Newbie } from './module1.js';

// var noob = new Newbie();
// noob.levelUp(); // I feel stronger.

// import { str1, bar } from './module1.js';

// console.log(str1);
// console.log(bar);

// import fn1 from './module1.js';
// fn1();

// import { fn } from './module1.js';
// fn();

// import { PI } from './module1.js';
// console.log(PI); // 3.14

// import { ZERO } from './module1.js';
// console.log(ZERO); // 0

// import * as math from './module1.js';
// console.log(math.ZERO); // 0
// console.log(math.ONE); // 1
// console.log(math.PI); // 3.14
// console.log(math.GOLDEN_RATIO); // 1.618
// console.log(math.KAPREKA_NNUMBER); // "495, 6174"

// import { default as hello } from './module1.js';
// hello(); // Oh hello there!

// import './module2.js';
// // yourName(); // I'm waldo.

import { a, b, fn } from './module1.js';

console.log(a); // 1
console.log(b); // 2
console.log(fn()); // Hello world!

let btn = document.querySelector('button#btn');

btn.addEventListener('click', () => {
  import('./dynamic-module.js').then((module) => {
    alert(module.message); // 경고창 "wassssssssssssup" 표시
  });
});
