
/*
----------------------------------------------------------------
? Falsy
----------------------------------------------------------------
Value	        Type	    Description
null	        Null	    The keyword null — the absence of any value.
undefined	    Undefined	undefined — the primitive value.
false	        Boolean	    The keyword false.
NaN	            Number	    Not a Number (represents an invalid or undefined result from a calculation.)
0	            Number	    The Number zero, also including 0.0, 0x0, etc.
-0	            Number	    The Number negative zero, also including -0.0, -0x0, etc.
0n	            BigInt	    The BigInt zero, also including 0x0n, etc. Note that there is no BigInt negative zero — the negation of 0n is 0n.
""	            String	    Empty string value, also including '' and ``.
document.all	Object	    The only falsy object in JavaScript is the built-in document.all.

----------------------------------------------------------------
? Truthy
----------------------------------------------------------------
All values are truthy except false values.
*/

//Truthy & falsy examples

const matte = 2 * "sju"

if (matte) {
    console.log(matte)
    console.log(typeof matte)
    console.log("Detta värdet är truthy ✅")
} else {
    console.log(matte)
    console.log(typeof matte)
    console.log("Detta värdet är falsy ❌")
}


/*  && → första falsy, annars sista */

/*  || → första truthy, annars sista */

/*  ?? tar nästa värde bara om vänster sida är null eller undefined */

/*  ! → vänder till motsatt boolean */

/* ---------------------------------------------------------------- 
? Functions
 ---------------------------------------------------------------- */


//Varför funktioner?

console.log("Hej Ahmed")
console.log("Hej Lisa")
console.log("Hej Stina")

//function
function basicFunction() {
    console.log("Jag är en funktion 🔥")
}

basicFunction()
basicFunction()
basicFunction()

function greet(name) {
    return "👋 Hej " + name
}

const svar = greet("Johan")

console.log(svar)

//---------------------------------------------

//arrow-function (modern)
const add = (a, b) => {
    return a + b
}

console.log("arrow function 🏹", add(5, 3))

const shortArrow = () => console.log("Short arrow function 🏹")

shortArrow();

//---------------------------------------------

//scope example
let globalVariable = "Jag är global 🌏"

function testScope() {
    let localVariable = "Jag är lokal 📦"
    console.log(globalVariable)
    console.log(localVariable)
}

testScope()

console.log(globalVariable)
// console.log(localVariable) // Error

//---------------------------------------------

//Hoisting

hoisted()

function hoisted() {
    console.log("Jag blir hoistad")
}

// notHosited()

const notHosited = function () {
    console.log("Jag blir inte hositad")
}

// RETURN
const arrowReturn = (a, b) => {
    return a + b
}

const answer = arrowReturn(10, 5)

console.log(arrowReturn(2, 5))

console.log(arrowReturn(9, 1))

console.log(answer)