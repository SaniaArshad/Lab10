const subtract= require('./sum');
test('subtract 3 - 2 to equal 1',()=>{
    expect(subtract.subtract(3,2)).toBe(1);
});
const sum= require('./sum');
test('adds 1 + 2 to equal 3',()=>{
    expect(sum.sum(1,2)).toBe(3);
});
const multiply= require('./sum');
test('3 * 2 to equal 6',()=>{
    expect(multiply.multiply(3,2)).toBe(6);
});
const divide= require('./sum');
test('6 / 2 to equal 3',()=>{
    expect(divide.divide(6,2)).toBe(3);
});

test('6 / 0 to equal 3',()=>{
    expect(divide.divide(6,0)).toBe(false);
});


