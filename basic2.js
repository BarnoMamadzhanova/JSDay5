

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
console.log(animalsArr);

for(let animals of animalsArr) {
    document.getElementById('print').innerHTML +=
    `<ul class="list-group my-2 p-2">
        <li class="list-group-item">${animals.printInfo()}</li>
    </ul>
    `
}

