function task5(element) {
    let array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    for (let i=0;i<20;i++){
        if (element==array[i]){
            return true;
        }
    }
    return false;
}
module.exports.task5=task5;