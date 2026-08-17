const cjsModule = require('./cjs-module-export');
const {sayHello, sayGoodbye} = require('./cjs-module-export');
const greetings = require('./cjs-module-export').greetings;
const User = require('./cjs-module-export').User;
const getDate = require('./cjs-module-export').getDate;

console.log(cjsModule.sayHello('John'));
console.log(sayHello('Alice1'));
console.log(sayGoodbye('Alice2'));
console.log(greetings.morning);
console.log(new User('Bob').getName());
console.log(getDate());
