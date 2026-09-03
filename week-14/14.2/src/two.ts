// classes implementing interfaces

interface People{
    name: string;
    age: number;
    isLegal(age: number): boolean;
}

class Manager implements People{
    name: string;
    age: number;
    number: string;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
        this.number = "456789"
    }
    isLegal(age: number){
        return age > 18;
    }
}

let user = new Manager("John", 30);
console.log(user.age);
let legal = user.isLegal(55)
console.log(legal);