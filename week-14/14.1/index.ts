function greet(firstName: string){
    console.log("Hello " + firstName);
}

// greet("harsh")

function sum(a: number, b: number): number{
    return a + b;
}

// console.log(sum(5, 5))

function isLegal(age: number){
    if(age >= 18){
        return true;
    }
    else{
        return false;
    }
}

// console.log(isLegal(17))

function delayedCall(fn : () => void){
    setTimeout(fn, 1000)
}

delayedCall(function(){
    console.log("hello");
    return 1;
})