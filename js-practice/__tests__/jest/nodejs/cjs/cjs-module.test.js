const cjsModule = require('./cjs-module-export');
const {sayHello, sayGoodbye, greetings, User, getDate} = require('./cjs-module-export');

test('sayHello should return a greeting message', () => {
  expect(sayHello('John1')).toBe('Hello, John1!');
  expect(cjsModule.sayHello('Alice1')).toBe('Hello, Alice1!');
});

test('sayGoodbye should return a farewell message', () => {
  expect(sayGoodbye('John2')).toBe('Goodbye, John2!');
  expect(cjsModule.sayGoodbye('Alice2')).toBe('Goodbye, Alice2!');
});

test('greetings should contain greeting messages', () => {
  expect(greetings.morning).toBe('Good morning!');
  expect(greetings.afternoon).toBe('Good afternoon!');
  expect(greetings.evening).toBe('Good evening!');
});

test('User class should create a user with a name', () => {
  const user = new User('Bob');
  expect(user.getName()).toBe('Bob');
  expect(user).toBeInstanceOf(User);
});

test('getDate should return the current date', () => {
  const currentDate = new Date();
  expect(getDate()).toBeInstanceOf(Date);
  expect(getDate().getDate()).toBe(currentDate.getDate());
});
