// classes implementing interfaces

interface People{
    name: string,
    age: number,
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
}

let user = new Manager("John", 30);
console.log(user.age);
