//objects
const user = {
    name:"devesh",
    age:"22",
    role:"developer",
    salary:"35000"
}

console.log(user.name);

//classes and constructor

class rectangle{
    constructor(length,width,color){
        this.length = length
        this.width = width
        this.color = color
    }

    area(){
        const area = this.length * this.width
        return area;
    }
    paint(){
        console.log(`coloring the rectangle with ${this.color} color`)
    }
}

const rec1 = new rectangle(2,4,"blue")
rec1.paint()
const area1 = rec1.area()
console.log(area1);
