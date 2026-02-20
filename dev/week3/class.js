//objects
const user = {
    name:"devesh",
    age:"22",
    role:"developer",
    salary:"35000"
}

console.log(user.name);

//classes and constructor


//classes 

class rectangle{
    constructor(height,width,color){
        this.height = height
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


const shape1 = new rectangle(10,20,"blue")
shape1.paint()

class animal{
    constructor(legs,sound,breed){
        this.legs = legs
        this.sound = sound
        this.breed = breed
    }
}

const dog = new animal(4,"bhow bhow","retriever")

console.log(dog.breed)
