{
  interface Checkable {
    check(name: string): boolean;
  }

  // class NameChecker implements Checkable {
    // check(s): boolean {
      // ⛔ error TS7006: Parameter 's' implicitly has an 'any' type.
      // return false;
    // }
  // }

}
