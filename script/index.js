// =========================
// !1. VARIABLER
// =========================

// const
// Använd const när värdet inte ska ändras
const name = "Johan"
console.log("const:", name)

// Det här hade gett fel:
// name = "Anna"

// -------------------------

// let
// Använd let när värdet ska kunna ändras
let age = 30
console.log("let före ändring:", age)

age = 31
console.log("let efter ändring:", age)

// -------------------------

// var
// var är gammal syntax
// Du kommer se det i äldre kod, men i modern JavaScript använder vi oftast const och let
var city = "Malmö"
console.log("var före ändring:", city)

city = "Lund"
console.log("var efter ändring:", city)


// =========================
// !2. SCOPE
// =========================

// let och const har block scope
// var har inte block scope på samma sätt

{
    var x = "jag är skapad med var"
    let y = "jag är skapad med let"
    const z = "jag är skapad med const"

    console.log("Inne i blocket:")
    console.log(x)
    console.log(y)
    console.log(z)
}

console.log("Utanför blocket:")
console.log(x) // fungerar

// console.log(y) // fel
// console.log(z) // fel

// Förklaring:
// x fungerar utanför blocket eftersom var "läcker ut"
// y och z finns bara inne i blocket


// =========================
// !3. HOISTING
// =========================

// var hoistas
// Det betyder att JavaScript känner till variabeln innan raden där den skrivs

console.log(a) // undefined
var a = 1

// let och const hoistas också tekniskt,
// men de går inte att använda innan de deklareras
// Detta kallas ofta för "temporal dead zone"

// console.log(b) // ReferenceError
let b = 2

// console.log(c) // ReferenceError
const c = 3


// =========================
// !4. UNDEFINED OCH NULL
// =========================

// undefined = variabeln finns, men har inget värde än
let user
console.log("user just nu:", user)

// null = vi sätter medvetet ett tomt värde
user = null
console.log("user efter null:", user)


// =========================
// !5. INTRO TILL ARRAYS
// =========================

// En array används när vi vill spara flera värden i en lista
const fruits = ["äpple", "banan", "apelsin"]

console.log("Hela arrayen:", fruits)
console.log("Första frukten:", fruits[0])
console.log("Andra frukten:", fruits[1])
console.log("Sista frukten:", fruits[fruits.length - 1])

// length visar hur många värden som finns i arrayen
console.log("Antal frukter:", fruits.length)


// =========================
// !6. INTRO TILL OBJECTS
// =========================

// Ett objekt används när vi vill beskriva något med flera egenskaper
const student = {
    name: "Anna",
    age: 25,
    studiesJs: true
}

console.log("Hela objektet:", student)
console.log("Studentens namn:", student.name)
console.log("Studentens ålder:", student.age)
console.log("Läser JavaScript:", student.studiesJs)


// =========================
// !7. ARRAY + OBJECT TILLSAMMANS
// =========================

// Här har vi en array med flera objekt
const students = [
    {
        name: "Anna",
        age: 25
    },
    {
        name: "Erik",
        age: 30
    },
    {
        name: "Sara",
        age: 28
    }
]

console.log("Första studenten:", students[0])
console.log("Första studentens namn:", students[0].name)
console.log("Andra studentens ålder:", students[1].age)


//Nämn symbol och 