{
  class Newbie {
    private name: string;
    #name2: string;
    readonly age: number = 0;

    constructor(name: string, age: number) {
      this.name = name;
      this.#name2 = name;
      this.age = age;
    }

    public getAge(): number {
      return this.age;
    }

    public getName(): string {
      return this.name;
    }

    public setName(name: string): void {
      this.name = name;
    }

    public getName2(): string {
      return this.#name2;
    }

    public setName2(name: string): void {
      this.#name2 = name;
    }

    // public setAge(age: number): void {
    //   this.age = age;
    // }
    // ⛔ error TS2540: Cannot assign to 'age' because it is a read-only property.
  }

  let noob = new Newbie('John', 20);
  noob.getName();
// noob.name; // ⛔ error TS2341: Property 'name' is private and only accessible within class 'Newbie'.
  noob.setName('Waldo');
  noob.getName2();
  noob.setName2('Waldo2');
// noob.#name; // ⛔ error TS2339: Property '#name' does not exist on type 'Newbie'.

}
