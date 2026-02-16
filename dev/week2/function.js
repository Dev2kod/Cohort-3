function perform(a,b,func){
    return func(a,b);
}

function add (a,b){
    return a+b;
}

function sub (a,b){
    return a-b;
}

console.log(perform(1,2,add))