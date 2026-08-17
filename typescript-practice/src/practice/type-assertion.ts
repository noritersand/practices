{
  let value: unknown = "Hello, TypeScript!";

  // console.log((value).toUpperCase());
  // error TS2571: Object is of type 'unknown'.
  // value는 unknown이기 때문에 바로 toUpperCase() 호출 불가

  console.log((value as string).toUpperCase());


}
