class Animal {
    constructor (name, type){
        this.name = name;
        this.type = type;
    }

    get animalType() {
        return `Este animal se llama ${this.name} y es un ${this.type}`;
    }
}

class Dog extends Animal{
    constructor (name){

        
        super(name)
        this.type = "perro hembra"
    }
    get action() {
        return "El perro hembra hace wof"
    }
} 

class Cat extends Animal {
    constructor (name){
        super(name)
        this.type = "gato hembra"
    }
    get action() {
        return "El gato hembra araña"
    }
} 

