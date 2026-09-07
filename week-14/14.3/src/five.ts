// Record in typescript (It let's us give a cleaner type to objects)

// type Users = Record<string, number>;
type Users = Record<string, {age: number; name: string}>;

const users : Users = {
    "ras@qd1": {age: 21, name: "kirat"},
    "ras1dr@": {age: 23, name: "yash"}
}