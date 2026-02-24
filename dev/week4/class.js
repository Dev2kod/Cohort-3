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
    constructor(height,width,color){
        this.height = height
        this.width = width
        this.color = color
    }
    area(){
        const area = this.height * this.width
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


const shape1 = new rectangle(10,20,"blue")
shape1.paint()



//inheritance
class animal{
    constructor(legs,sound){
        this.legs = legs
        this.sound = sound
    }
}

class dog extends animal{
    constructor(name,breed){
        super(4,"whoof")
        this.name = name;
        this.breed = breed
    }
    bark(){
        console.log(`${this.name} says ${this.sound} !!!`); 
    }
}

const leo = new dog("leo","lab")

leo.bark()


