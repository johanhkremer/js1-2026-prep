// =====================
// 1. Variabelnamn
// =====================

let userName = "Johan"
console.log(userName)


// =====================
// 2. const och omassignering
// =====================

let age = 25
age = 26
console.log(age)


// =====================
// 3. if/else
// =====================

let isLoggedIn = false

if (isLoggedIn === true) {
    console.log("Inloggad")
} else {
    console.log("Inte inloggad")
}


// =====================
// 4. Loop
// =====================

for (let i = 0; i < 5; i++) {
    console.log(i)
}


// =====================
// 5. Funktion med argument
// =====================

function multiply(a, b) {
    return a * b
}

console.log(multiply(5, 2))


// =====================
// 6. return
// =====================

function getFullName(firstName, lastName) {
    return firstName + " " + lastName
}

console.log(getFullName("Anna", "Andersson"))


// =====================
// 7. Scope
// =====================

function showMessage() {
    let message = "Hej!"
    return message
}

console.log(showMessage())


// =====================
// 8. map
// =====================

const numbers = [1, 2, 3]

const doubled = numbers.map((number) => {
    return number * 2
})

console.log(doubled)


// =====================
// 9. filter
// =====================

const ages = [12, 18, 25, 15]

const adults = ages.filter((age) => {
    return age >= 18
})

console.log(adults)


// =====================
// 10. filter + map
// =====================

const students = [
    { name: "Anna", active: true },
    { name: "Erik", active: false },
    { name: "Sara", active: true }
]

const activeStudents = students
    .filter((student) => {
        return student.active === true
    })
    .map((student) => {
        return student.name
    })

console.log(activeStudents)