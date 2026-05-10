// =========================
// Del 1 – Greeting
// =========================
function greetUserReturn(name) {
    if (!name) {
        console.log("Hej gäst ■")
    } else {
        console.log("Hej " + name)
    }
}

function greetUser(name) {
    return "Hej " + (name || "gäst 👤")
}

// =========================
// Del 2 – Validera användare
// =========================
function isValidUserReturn(name, age) {
    return name && age >= 18
}

let validUser = false

function isValidUser(name, age) {
    if (name && age >= 18) {
        validUser = true
    } else {
        validUser = false
    }
}

// =========================
// Del 3 – Counter
// =========================
let counterReturn = 0

function incrementCounterReturn() {
    counter++
    return counter
}

let counter = 0

function incrementCounter() {
    counter = counter + 1
}

// =========================
// Del 4 – Kombinera allt
// =========================
function handleUserReturn(name, age) {
    if (!isValidUser(name, age)) {
        return "Ogiltig användare ❌"
    }

    const greeting = greetUser(name)
    const count = incrementCounter()

    return greeting + " (besök: " + count + ")"
}

function handleUser(name, age) {
    isValidUser(name, age)

    if (!validUser) {
        console.log("Ogiltig användare ■")
    } else {
        incrementCounter()
        console.log("Hej " + name + " (besök: " + counter + ")")
    }
}

// =========================
// Test
// =========================
console.log(handleUser("Johan", 25))
// Hej Johan (besök: 1)

console.log(handleUser("", 25))
// Ogiltig användare ❌

console.log(handleUser("Lisa", 15))
// Ogiltig användare ❌

console.log(handleUser("Anna", 30))
// Hej Anna (besök: 2)







const userName = prompt("Vad heter du?")
const userAge = prompt("Hur gammal är du?")

function isValidUserReturn(name, age) {
    if (name && age >= 18) {
        return "✅ Du är en valid user"
    } else {
        return "🛑 Du är inte en valid user"
    }

}

console.log(isValidUserReturn(userName, userAge))