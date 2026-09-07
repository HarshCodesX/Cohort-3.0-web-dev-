// defining a type in typescript
type User = {
    id: string;
    username: string;
}

type Users = {
    [ket: string]: User;
}

const users: Users = {
    "ras@qd1":{
        id: 'ras@qd1',
        username: 'kirat'
    },
    "ras1dr@": {
        id: "ras1dr@",
        username: 'harkirat'
    }
}