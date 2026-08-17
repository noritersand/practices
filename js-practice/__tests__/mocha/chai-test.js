import {expect} from 'chai';

var foo = 'bar';

describe('Chai test', () => {
  console.log('hello chai!');
  it('should be pass', () => {
    expect([1, 2]).deep.to.equal([1, 2]);
    expect({a: 1}).deep.to.equal({a: 1});
    expect({a: {b: 2}}).deep.to.equal({a: {b: 2}});
  });
  // it('should be fail', () => {
  //   expect([1, 2]).deep.to.equal([1, 2, 3]);
  // });
});
