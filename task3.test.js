
const task3= require('./task3');

test('power 2 with 2 is 4',()=>{
    expect(task3.power(2,2)).toBe(4);
});
test('3.3 rounds to 3',()=>{
    expect(task3.round(3.3)).toBe(3);
});
test('4.5 celing is 5',()=>{
    expect(task3.ceiling(4.5)).toBe(5);
});