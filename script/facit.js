// =========================
// Del 1 – Greeting
// =========================
function greetUser(name) {
    return "Hej " + (name || "gäst 👤")
}


// =========================
// Del 2 – Validera användare
// =========================
function isValidUser(name, age) {
    return name && age >= 18
}


// =========================
// Del 3 – Counter
// =========================
let counter = 0

function incrementCounter() {
    counter++
    return counter
}


// =========================
// Del 4 – Kombinera allt
// =========================
function handleUser(name, age) {
    if (!isValidUser(name, age)) {
        return "Ogiltig användare ❌"
    }

    const greeting = greetUser(name)
    const count = incrementCounter()

    return greeting + " (besök: " + count + ")"
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
