

const dog = {
    dName : "Lucky",
    breed : "Doberman",
    age : 1,
    food : ["Fish", "Meat", "Fodder"],
    makeAction : function() {
        return "Run and play";
    }
}

console.log(dog.makeAction());

const cat = {
    cName : "Sunny",
    breed : "Safary",
    age : 4,
    food: ["Fish", "Milk", "Fruits"],
    printMessage : function() {
        return `Name: ${this.cName}, Breed: ${this.breed}, Age: ${this.age} years old.`;
    }
}

console.log(cat.printMessage());

const fish = {
    fName : "First",
    breed : "Guppy",
    age : 2,
    food : ["Worms", "Dry food", "Caviar"],
    printInfo : function() {
        return `Name: ${this.fName}, Breed: ${this.breed}, Age: ${this.age} years old.`;
    }
}

console.log(fish.printInfo());

const person1 = {
    firstName : "Alicia",
    age : 31,
    profession: "Manager",
    hobbys : ["Films", "Cooking", "Swiming"],
    giveInfo : function() {
        return `${this.firstName} like watching ${this.hobbys}.`;
    }
}

console.log(person1.giveInfo());

const person2 = {
    firstName : "Sara",
    age : 22,
    profession: "Student",
    hobbys : ["reading", "jogging", "playing VG"],
    giveInfo : function() {
        return `${this.firstName} like ${this.hobbys}.`;
    }
}

console.log(person2.giveInfo());

const person3 = {
    firstName : "Mark",
    age : 11,
    profession: "Pupil",
    hobbys : ["playing", "dancing", "watching"],
    giveInfo : function() {
        return `${this.firstName} like ${this.hobbys} cartoons.`;
    }
}

console.log(person3.giveInfo());

const car1 = {
    brand : "KIA",
    model : "Sorento",
    weight : 1120,
    age: 5,
    makeAction : function(){
        return `${this.brand} ${this.model} accelerates in 2 seconds.`;
    }
}

console.log(car1.makeAction());

const car2 = {
    brand : "Aston Martin",
    model : "DB12",
    topSpeed : 193,
    age: 0,
    makeAction : function(){
        return `Top speed of ${this.brand} ${this.model} is ${this.topSpeed} MPH.`;
    }
}

console.log(car2.makeAction());

const car3 = {
    brand : "Land rover",
    model : "Range Rover",
    cost : 235320,
    age: 0,
    makeAction : function(){
        return `The new ${this.brand} ${this.model} costs ${this.cost}$.`;
    }
}

console.log(car3.makeAction());