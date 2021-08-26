import operate from '../logic/operate'
const assert = require('assert')
 
describe('Test operate function', () => {
  it('It shoud be 3', () => {
    assert(operate(1, 2, '+') === '3')
  });

  it('It shoud be -1', () => {
    assert(operate(1, 2, '-') === '-1')
  });

  it('It shoud be 2', () => {
    assert(operate(1, 2, 'x') === '2')
  });

  it('It shoud be 0.5', () => {
    assert(operate(1, 2, '÷') === '0.5')
  });

  it('It shoud be 0', () => {
    assert(operate(1, 2, '%') === '1')
  });
});