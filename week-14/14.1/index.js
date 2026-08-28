"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(firstName) {
    console.log("Hello " + firstName);
}
// greet("harsh")
function sum(a, b) {
    return a + b;
}
// console.log(sum(5, 5))
function isLegal(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
// console.log(isLegal(17))
function delayedCall(fn) {
    let ans = setTimeout(fn, 1000);
    return ans;
}
console.log(delayedCall(function () {
    // console.log("hello")
    return "hello";
}));
//# sourceMappingURL=index.js.map