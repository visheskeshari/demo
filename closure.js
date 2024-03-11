// Closures

// closure means "inner" function has an access to the variables and parameters of 'outer' function even after outer function has returned

let outerFunction = function(outerParam){
    let outerVariable = "outer variable";

    let innerFunction = function(){
        console.log(outerVariable, outerParam)
    }
    return innerFunction;
}

let innerFunc = outerFunction("Outer parameter");
innerFunc()




// closure does not make seperate copy of outer variable
// it just reference them

let counter = function(){
    let count = 0;
        let innerCounter = function(){
            return count = count + 1;
        }
        return innerCounter;
}

let innerCount = counter();
console.log(innerCount());
console.log(innerCount());
console.log(innerCount());



