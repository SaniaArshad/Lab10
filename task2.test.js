const task2= require('./task2');
test('Task 2 with numbers with 3, 5 and 10 ',()=>{
    expect(task2.task2(3,5,10)).toBe(23);
});