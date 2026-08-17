{
  interface Point {
    x: number;
    y: number;
  }

  function printPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
  }

  // "12, 26"를 출력합니다
  const point = { x: 12, y: 26 };
  printPoint(point)

  const point3 = { x: 12, y: 26, z: 89 };
  printPoint(point3); // prints "12, 26"

  const rect = { x: 33, y: 3, width: 30, height: 80 };
  printPoint(rect); // prints "33, 3"

  const color = { hex: "#187ABF" };

  // printPoint(color);
  // ⛔ error TS2345: Argument of type '{ hex: string; }' is not assignable to parameter of type 'Point'.
  // Type '{ hex: string; }' is missing the following properties from type 'Point': x, y

}
