const arr = [1, 2, 3];
arr[1] = 56;

const obj = {
    name: "harsh",
    age: 23,
    country: "India"
}

obj.name = "kirat";

// what we if we dont want to do all this, we want to make these objects readonly

// for this we can use "Readonly" in typescript

type User = {
    readonly name: string;
    readonly age: number;
}

const newObj: User = {
    name: "lakshay",
    age: 34
}

// newObj.name = "hurhfrh" // it will give error as both name as well as age are readonly now