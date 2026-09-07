// Maps in typescript

const users = new Map();
users.set("ras@qd1", {name: "Ras", age: 30, email: "ras@qd1"});
users.set("sarah@qd1", {name: "Sarah", age: 28, email: "sarah@qd1"});

const user = users.get("ras@qd1");
console.log(user);