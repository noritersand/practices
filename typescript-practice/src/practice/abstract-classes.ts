{
  abstract class Base {
    abstract getName(): string;

    printName() {
      console.log("Hello, " + this.getName());
    }
  }

  // const b = new Base(); // ⛔ error TS2511: Cannot create an instance of an abstract class.

  class Derived extends Base {
    getName() {
      return "world";
    }
  }

  const d = new Derived();
  console.log(d.printName());

  // class Derived2 extends Base {}
  // ⛔ error TS18052: Non-abstract class 'Derived2' does not implement all abstract members of 'Base'

  // function greet(ctor: typeof Base) {
    // const instance = new ctor(); // ⛔ error TS2511: Cannot create an instance of an abstract class.
    // instance.printName();
  // }

  // function greet(ctor: new () => Base) {
  //   const instance = new ctor();
  //   instance.printName();
  // }
  // greet(Derived);
  // greet(Base);
  // Argument of type 'typeof Base' is not assignable to parameter of type 'new () => Base'.
  //   Cannot assign an abstract constructor type to a non-abstract constructor type.
}
