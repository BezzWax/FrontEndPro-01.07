// 1. 

class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    humanShowInfo() {
        console.log(this.name + ": " + this.age);
    }
};


//2

class Car {
    constructor(brand, model, yearOfProduction, carNumber, owner){
        this.brand = brand;
        this.model = model;
        this.yearOfProduction = yearOfProduction;
        this.carNumber = carNumber;
        this.ownerInfo(owner);
    }
// add method
    ownerInfo(owner) {
        if(owner.age >= 18){
            this.owner = owner;
        } else {
            console.log('Owner can not use the car');
        }
    }

    showInfo() {
        console.log(`Car: ${this.brand} ${this.model}, Year: ${this.yearOfProduction}, License Plate: ${this.carNumber}`);
        this.owner.humanShowInfo();
    }

}

const human1 = new Human("John", 25);
const human2 = new Human("Alice", 67);

const car1 = new Car("Toyota", "Camry", 2022, "ABC123", human1);
const car2 = new Car("Ford", "Mustang", 2018, "XYZ789", human2);

car1.showInfo();
car2.showInfo();
