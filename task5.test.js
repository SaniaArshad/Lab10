const task5= require('./task5');

test('5 will be present in the array',()=>{
    expect(task5.task5(5)).toBe(true);
});

test('21 will not be present in the array',()=>{
    expect(task5.task5(22)).toBe(false);
});