function sum(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b
}
function divide(a,b){
let sum=a/b;
if (b==0){
    return false;
}
else{
return sum;
}
   

}
module.exports.subtract=subtract;
module.exports.sum=sum;
module.exports.multiply=multiply;
module.exports.divide=divide;