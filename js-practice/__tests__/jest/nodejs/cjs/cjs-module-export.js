function sayHello(name) {
  return `Hello, ${name}!`;
}

function sayGoodbye(name) {
  return `Goodbye, ${name}!`;
}

const greetings = {
  morning: 'Good morning!',
  afternoon: 'Good afternoon!',
  evening: 'Good evening!'
};

class User {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

module.exports = {
  sayHello,
  sayGoodbye,
  greetings,
  User
};

module.exports.getDate = function () {
  return new Date();
};
