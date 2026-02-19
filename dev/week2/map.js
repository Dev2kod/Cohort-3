const ip = [1,2,3,4,5,6,7,8];

const add1 = (i) =>{return i+1};

const op  = ip.map(add1);

console.log(op);


// filtering
const input = [1,2,3,4,5,6,7,8,9,10];
const output = input.filter((el)=>{
    if(el%2==0){
        return true;
    }
    else{return false}
})

console.log(output);
