// ======================================================
// SVÅRARE BUGGAR I JAVASCRIPT
// ======================================================



// ======================================================
// 1. Truthy / falsy
// ======================================================

let username = ""

if (username) {
    console.log("Användarnamn finns")
} else {
    console.log("Inget användarnamn")
}



// ======================================================
// 2. Off-by-one i loop
// ======================================================

const fruits = ["äpple", "banan", "mango"]

for (let i = 0; i <= fruits.length; i++) {
    console.log(fruits[i])
}



// ======================================================
// 3. Return inuti loop
// ======================================================

function findFirstBigNumber(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 10) {
            return numbers[i]
        } else {
            return "Inget tal över 10"
        }
    }
}

console.log(findFirstBigNumber([3, 5, 12, 8]))



// ======================================================
// 4. map med objekt
// ======================================================

const products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 200 }
]

const names = products.map((product) => {
    return product.title
})

console.log(names)



// ======================================================
// 5. filter med fel typ
// ======================================================

const numbers = [1, 2, 3, 4, 5]

const result = numbers.filter((number) => {
    return number === "3"
})

console.log(result)



// ======================================================
// 6. Variabelscope i loop
// ======================================================

for (let i = 0; i < 3; i++) {
    let message = `Varv ${i}`
}

console.log(message)



// ======================================================
// 7. Funktion anropas för tidigt
// ======================================================

console.log(sum(2, 3))

const sum = function (a, b) {
    return a + b
}



// ======================================================
// 8. Mutation av array av misstag
// ======================================================

const numbersList = [3, 1, 2]

const sortedNumbers = numbersList.sort()

console.log("Original:", numbersList)
console.log("Ny:", sortedNumbers)



// ======================================================
// 9. filter + includes
// ======================================================

const words = ["html", "css", "javascript", "react"]

const longWords = words.filter((word) => {
    return word.includes > 3
})

console.log(longWords)



// ======================================================
// 10. Kedjning med logiskt fel
// ======================================================

const users = [
    { name: "Anna", age: 17, active: true },
    { name: "Erik", age: 25, active: false },
    { name: "Sara", age: 30, active: true }
]

const resultUsers = users
    .filter((user) => {
        return user.age > 18
    })
    .filter((user) => {
        return user.active
    })
    .map((user) => {
        user.name.toUpperCase()
    })

console.log(resultUsers)