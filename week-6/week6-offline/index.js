const jwt = require("jsonwebtoken");

const value = {
    name: "harsh",
    accountNumber: "12444342"
}

const token = jwt.sign(value, "secret");
console.log(token);


//try catch

function getLength(name){
    return name.length;
}

try{
    const ans = getLength();
    console.log(ans);
}
catch(error){
    console.log(error.message);
}