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

const teacherObject = {
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

//! Räkna med JavaScript

const a = 10
const b = 3

console.log("Addition:", a + b) // 13
console.log("Subtraktion:", a - b) // 7
console.log("Multiplikation:", a * b) // 30
console.log("Division:", a / b) // 3.3333333333333335
console.log("Rest:", a % b) // 1

let score = 0
score = score + 5
score += 10
score++
console.log("score:", score) // 16


//! Konkatenering vs addering
console.log("Addera:", 5 + 5) // 10 (number + number)
console.log("Konkatenera:", "5" + "5") // "55" (string + string)
console.log("Blandat:", 5 + "5") // "55" (string vinner)

//! Typkonvertering i uträkningar
const input = "20" // t.ex. från ett input-fält, alltid en string

console.log(input + 5) // "205" (konkatenering)
console.log(Number(input) + 5) // 25 (string -> number)
console.log("10" - 2) // 8 (minus gör om till number)
console.log("hej" * 2) // NaN (Not a Number)
