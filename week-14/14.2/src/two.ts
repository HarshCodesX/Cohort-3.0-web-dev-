// classes implementing interfaces

interface Person{
    name: string,
    age: number,
    greet: (name: string) => string
}

let person: Person = {
    name: "Harsh",
    age: 23,
    greet: function(name){
        return `Hello, my name is ${name} and I am ${this.age} years old.`;
    }
}

let greeting = person.greet("lakshay");
console.log(greeting)