class Newbie {
  publicName;
  #privateName;
  age;

  constructor({publicName, privateName, age} = {}) {
    this.publicName = publicName;
    this.#privateName = privateName;
    this.age = age;
  }

  get privateName() {
    return this.#privateName;
  }

  set privateName(value) {
    this.#privateName = value;
  }

  get publicName() {
    return this.publicName;
  }

  set publicName(value) {
    this.publicName = value;
  }

  get age() {
    return this.age;
  }

  set age(value) {
    this.age = value;
  }
}

module.exports = Newbie;
