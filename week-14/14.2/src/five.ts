//  Given an array of numbers, return the max

function getMax(nums: number[]){
    let maxValue = -Infinity;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > maxValue){
            maxValue = nums[i]
        }
    }
    return maxValue;
}

let ans = getMax([23, -15, 45, 56, 778, 45, 4776]);
console.log(ans)

// Given a interface, take a array User and return all the legal users

interface User {
    firstName: string;
    lastName: string;
    age: number;
}

function isLegal(users: User[]){
    let legalUsers = []
    for(let user of users){
        if(user.age >= 18){
            legalUsers.push(user);
        }
    }
    return legalUsers;
}

let users = [
    {
        firstName: "harsh",
        lastName: "gupta",
        age: 23
    },
    {
        firstName: "lakshay",
        lastName: "mittal",
        age: 17
    },
    {
        firstName: "sneha",
        lastName: "bansal",
        age: 22
    },
]

let val = isLegal(users)
console.log(val);