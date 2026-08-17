{
  let getWaldo = (name: string): {name: string; age?: number} => {
    return {name}
  };
  getWaldo('Waldo').age = 128;
}
