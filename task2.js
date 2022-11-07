function task2(a,b,x){
    let multiples=0;
    for( let i=0; i<x; i++){
        if (i%a==0){
            multiples=multiples+i;
        }
        if (i%b==0){
            multiples=multiples+i;
        }  
    }
    return multiples;
}
module.exports.task2=task2;