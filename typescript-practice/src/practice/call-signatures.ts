{
  // 함수 정의식
  function getSymbol1(): symbol {
    return Symbol('me');
  }

  // 화살표 함수
  const getSymbol2 = (): symbol => {
    return Symbol('me too');
  }

  console.log(getSymbol1());
  console.log(getSymbol2());
}
