{
  class MyClass {
    #myPrivateField: string;

    constructor() {
      this.#myPrivateField = "Hello, world!";
    }

    #myPrivateMethod() {
      console.log("This is a private method.");
    }

    public myPublicMethod() {
      console.log(this.#myPrivateField);
      this.#myPrivateMethod();
    }
  }

  const myObject = new MyClass();
  // myObject.myPublicMethod(); // 출력: "Hello, world!" 와 "This is a private method."
  // console.log(myObject.#myPrivateField); // 에러: Property '#myPrivateField' is not accessible outside class 'MyClass' because it has a private identifier.
  // myObject.#myPrivateMethod(); // 에러: Property '#myPrivateMethod' is not accessible outside class 'MyClass' because it has a private identifier.
}
