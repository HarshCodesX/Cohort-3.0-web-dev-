// interfaces vs types
//  Create two types called User and Admin
// Create a function that takes either a user or an admin as an input, and returns a string saying "welcome, [name]"

interface Admin {
    name: string;
    permissions: string;
}

interface User {
    name: string;
    age: number
}

type UserOrAdmin = Admin | User

function greet(user: UserOrAdmin){
    console.log(user.name)
}