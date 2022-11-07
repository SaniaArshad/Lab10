const task4= require('./task4');

test('hello will be olleh',()=>{
    expect(task4.reverseString("hello world")).toBe("dlrow olleh");
});
