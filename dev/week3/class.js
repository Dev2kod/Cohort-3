//objects
const user = {
    name:"devesh",
    age:"22",
    role:"developer",
    salary:"35000"
}

console.log(user.name);


//classes 

class rectangle{
    constructor(height,width,color){
        this.height = height
        this.width = width
        this.color = color
    }

    paint(){
        console.log(`painting the rectangle with ${this.color}`);
        
    }
}

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