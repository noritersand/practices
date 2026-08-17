console.log(123);

function fn() {
  let a = 'abcd';
  // debugger;
  return () => {
    console.log(a);
  };
}

var f = fn();
f();
