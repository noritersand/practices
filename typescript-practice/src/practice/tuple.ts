{
  let tuple: [string, number];
  tuple = ["hello", 10];

  function calculateArea(dimensions: [number, number]): number {
    const [width, height] = dimensions;
    return width * height;
  }

  const area = calculateArea([3, 4]);
  console.log(area); // 출력: 12

}
