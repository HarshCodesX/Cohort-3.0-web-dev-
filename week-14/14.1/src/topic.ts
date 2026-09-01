// types in typescript

interface User{
    name: string,
    age: number
}

type UserType = {
    name: string,
    age: number
}

let user: UserType = {
    name: "Harsh",
    age: 23
}

// another example
type StringOrNumber = string | number

function sum(a: StringOrNumber, b: StringOrNumber){
    // return a + b; //remove string from the StringorNumber type, it will stop throwing the error
}

// another example of types

type Employee = {
    name: string,
    startDate: Date
};

type Manager = {
    name: string,
    department: string
};

type TeamLead = Employee & Manager

const teamLead: TeamLead = {
    name: "yash",
    startDate: new Date(),
    department: "Software developer"
};