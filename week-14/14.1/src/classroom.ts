// interfaces in typescript

interface UserType {
    firstname: string,
    lastname: string,
    age: number
}

function greet(user: UserType){
    console.log("hello " + user.firstname)
}

let user: UserType = {
    firstname: "harsh",
    lastname: "gupta",
    age: 22
}

greet(user)