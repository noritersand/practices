{
  type fieldErrors = {
    email?: string[] | undefined;
    password?: string[] | undefined;
  } | {
    password: string[];
  }

  let fieldError: fieldErrors;

  fieldError = {
    password: ['Password is required']
  }

  type whether = {
    a: string;
    b: number;
  } | {};

  let whetherOrNot: whether;
  whetherOrNot = {};
  whetherOrNot = { a: 'a', b: 1 };
  whetherOrNot = { a: 2 };

  type FullObject = {
    type: 'full';
    a: string;
    b: number;
  };

  type EmptyObject = {
    type: 'empty';
  };

  type whether2 = FullObject | EmptyObject;

  let whetherOrNot2: whether2;

  // 올바른 할당
  whetherOrNot2 = { type: 'empty' };
  whetherOrNot2 = { type: 'full', a: 'a', b: 1 };

  // whetherOrNot2 = { type: 'full', a: 2 };
  // whetherOrNot2 = {};
  // ⛔ 컴파일 오류 발생: "type: 'full'"이 없거나 잘못된 타입의 'a'가 있는 경우

}
