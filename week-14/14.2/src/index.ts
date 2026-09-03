interface Address{
    city?: string,
    country: string,
    pincode: number,
}

interface User {
    name: string,
    age: number,
    address?: Address
};

interface Office{
    address: Address
}

let user2: User = {
    name: "Lakshay",
    age: 23,
    address: {
        city: "hyd",
        country: "India",
        pincode: 1234
    }
}

let user: User = {
    name: "Harsh",
    age: 23,
    address: {
        city: "Delhi",
        country: "India",
        pincode: 110001
    },
}