// HOISTING

// variable 'declaration' are 'hoisted' toward 'top' of their scope

// similarly normal functions are also hoisted toward top of their scope

test(); // called earlier
function test(){      // created later
    console.log("HOISTING")
}

// but other type of functions like arrow functions and IIFE are not hoisted