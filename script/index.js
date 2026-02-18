//function
function basicFunction() {
    console.log("Jag är en funktion 🔥")
}

basicFunction()
basicFunction()
basicFunction()

function greet(name) {
    return "Hej " + name
}

console.log(greet("Johan"))

//---------------------------------------------

//arrow-function (modern)
const add = (a, b) => {
    return a + b
}

console.log(add(5, 3))

const shortArrow = () => console.log("Short arrow function")

shortArrow();

//---------------------------------------------

//scope example
let globalVariable = "Jag är global"

function testScope() {
    let localVariable = "Jag är lokal"
    console.log(globalVariable)
    console.log(localVariable)
}

testScope()

console.log(globalVariable)
// console.log(localVariable) // Error

//---------------------------------------------

//Ytterligare exempel
function outer() {
    let counter = 0

    return () => {
        counter++
        return counter
    }
}

const increment = outer()

console.log(increment())
console.log(increment())
console.log(increment())