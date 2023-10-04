

let animalsArr = [];
class animals {
    constructor(species, name, breed, age, food) {
        this.species = species;
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.food = food;
        animalsArr.push(this)
    }

    printInfo() {
        return `My ${this.species} ${this.name} likes ${this.food}.`
    }
}

const animal1 = new animals("dog", "Coco", "doberman", 2, ["fish", "meat"]);
const animal2 = new animals("cat", "Sisi", "safary", 1, ["milk", "dry food"]);
const animal3 = new animals("fish", "Yellow", "guppy", 1, ["worm", "caviar"]);
// console.log(animalsArr);

for(let animals of animalsArr) {
    document.getElementById('print').innerHTML +=
    `<ul class="list-group my-2 p-2">
        <li class="list-group-item">${animals.printInfo()}</li>
    </ul>
    `
}

let personsArr = [];
class person {
    constructor(name, age, profession, hobbys) {
        this.name = name;
        this.age = age;
        this.profession = profession;
        this.hobbys = hobbys;
        personsArr.push(this)
    }

    printInfo() {
        return `${this.name} is ${this.age} old. She is a ${this.profession} and she likes ${this.hobbys}.`
    }
}

const person1 = new person("Sara", 29, "top manager", ["cooking", "backing"]);
const person2 = new person("Maria", 38, "housekeeper", ["jogging", "dancing"]);
const person3 = new person("Alicia", 14, "student", ["reading", "aerobics"]);
// console.log(personsArr);

for(let person of personsArr) {
    document.getElementById('person').innerHTML +=
    `<ul class="list-group my-2 p-2">
        <li class="list-group-item">${person.printInfo()}</li>
    </ul>
    `
}

let carsArr = [];
class car {
    constructor(brand, model, price, characteristics) {
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.characteristics = characteristics;
        carsArr.push(this)
    }

    printInfo() {
        return `${this.brand} ${this.model} costs ${this.price}$. It's characteristics are ${this.characteristics}.`
    }
}

const car1 = new car("KIA", "Sorento", 29990, ["improved equipment", "complimentary service"]);
const car2 = new car("Aston Martin", "DB12", 270000, ["individuality", "elegance"]);
const car3 = new car("Land rover", "Range Rover", 235320, ["all-terrain capability", "special technical equipment"]);

for(let car of carsArr) {
    document.getElementById('car').innerHTML +=
    `<ul class="list-group my-2 p-2">
        <li class="list-group-item">${car.printInfo()}</li>
    </ul>
    `
}