/*
sort()

- Sorterar lexikografiskt (som i en ordbok) om du inte skickar in något
- Jämför tecken för tecken (som text)
- Därför kan siffror bli fel

Ex:
["c", "a", "b"].sort()
["a", "b", "c"]

[10, 2, 5].sort()
["1", "10", "2", "5"] → [1, 10, 2, 5]

--------------------------------------

Med (a, b):

sort((a, b) => ...)

- a och b är två värden som jämförs åt gången
- Du bestämmer vilken som ska komma först

Returnera:
- negativt tal → a före b
- positivt tal → b före a
- 0 → ingen skillnad

Ex (siffror):
[10, 2, 5].sort((a, b) => a - b)
[2, 5, 10]

Ex (text):
["c", "a", "b"].sort((a, b) => a.localeCompare(b))
["a", "b", "c"]

👉 sort() utan (a, b) = enkel men "dum"
👉 sort((a, b)) = du bestämmer reglerna
*/

const fruits = ["mango", "apple", "banana", "kiwi"]

// fruits.sort()

// console.log(fruits)

const sortedFruits = fruits.toSorted()

// 👉 sort() utan (a, b) = alfabetisk sortering

console.log(sortedFruits)

const numbers = [9, 7, 3, 5, 8, 1, 10]

numbers.sort()

//Javascript gör om number till string och jämför första värdet
console.log(numbers)

/*
a - b returnerar - 0 + 

(2, 10) => 2 - 10 // -8
Negativt tal => 2 ska före 10
*/

numbers.sort((a, b) => {
    return a - b
})

console.log(numbers)


/*
1. fruits.sort()

const fruits = ["mango", "apple", "banana", "kiwi"]

fruits.sort()

- Använder JavaScripts standard-sortering
- Sorterar lexikografiskt (som text)
- Funkar ofta bra för enkla engelska ord


2. fruits.sort((a, b) => a.localeCompare(b))

const fruits = ["mango", "apple", "banana", "kiwi"]

fruits.sort((a, b) => a.localeCompare(b))

- Jämför orden alfabetiskt på ett tydligt sätt
- Du styr hur jämförelsen ska ske


Varför använda localeCompare?

- Viktigt för språk som svenska (å, ä, ö)
- Ger korrekt alfabetisk ordning enligt språkregler

Ex:
["z", "ä", "a"].sort()
["a", "z", "ä"] ❌

["z", "ä", "a"].sort((a, b) => a.localeCompare(b, "sv"))
["a", "z", "ä"] ✅ (korrekt enligt svenska)
*/

const students = [
    { id: 1, name: "Alice", age: 23, active: true },
    { id: 2, name: "Bob", age: 19, active: false },
    { id: 3, name: "Charlie", age: 25, active: true },
    { id: 4, name: "Diana", age: 28, active: true },
    { id: 5, name: "Elias", age: 17, active: false }
]

const studentsByAge = students.sort((a, b) => {
    return a.age - b.age
})

console.log(studentsByAge)

console.log(students)