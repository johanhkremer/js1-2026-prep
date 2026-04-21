// Absolut — här är datatyperna i JavaScript som en lista:

// string
// number
// boolean
// undefined
// null
// bigint
// symbol
// object

// Vanligt att också nämna dessa som särskilda fall av object:

// array
// function
//     date

console.log("Hello from script.js ⚡️")

//Let Får ändra data
let teacher = "Johan"
let age = 44
let courseStarted = true

//Const Får inte ändra data
const courseLengthWeeks = 20

console.log("Lärare i kursen", teacher)

teacher = "stefan"

console.log("Lärare i kursen", teacher)

console.log("teacter datatyp ?" + typeof teacher)
console.log("age datatyp ?" + typeof age)
console.log("course started datatyp ?" + typeof courseStarted)

const user = "johan"

console.log("user:", teacher, "datatyp:", typeof teacher)

//Datatyper: number, string, boolean

//? Om vi hinner

//! Scope
console.log("❌ Utanför kodblocket:")
const x = "1:a const 🔥"
console.log("första:", x)

{
    const x = "2:a const 🌊"
    let y = "let"
    var z = "var"

    console.log("✅ Inne i kodblocket:")
    console.log("andra:", x)
    // console.log(y)
    // console.log(z)
}

console.log("❌ Utanför kodblocket:")
console.log("3:e", x)
//console.log(y)
// console.log(z)

//! Hoisting 🏗️
varTest = "ny hoistad var 🏗️😵‍💫"

console.log(varTest)

var varTest = "hoistad var 🏗️"

console.log(varTest)

//! UNDEFINED & NULL
let undefinedUser

console.log(undefinedUser, typeof undefinedUser)

let nullUser = null

console.log(nullUser, typeof nullUser)

//! Intro till Arrayer

const array = ["banan", "kiwi", "melon", "apelsin", 1, false, 5]

console.log(typeof array[1])

console.log("Det finns:", array.length, "produkter på sidan")

//! Intro Objects

const teacher = {
    user: "johan",
    role: "teacher",
    age: 44,
}

console.log("Teacher:", teacher.user)

const teachers = [
    {
        user: "Johan",
        role: "teacher",
        age: 44,
    },
    {
        user: "Pelle",
        role: "teacher",
        age: 32,
    },
]

console.log(teachers)