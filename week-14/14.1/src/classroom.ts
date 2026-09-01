// interfaces in typescript

interface userType {
    firstname: string,
    lastname: string,
    age: number
}

function greet(user: userType){
    console.log("hello " + user.firstname)
}

let user: userType = {
    firstname: "harsh",
    lastname: "gupta",
    age: 22
}

greet(user)