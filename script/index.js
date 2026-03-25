/*
SORTERING I JAVASCRIPT

1. sort() utan callback
- JavaScript använder standardsortering
- värden jämförs som text
- fungerar ofta för vanliga ord
- fungerar dåligt för nummer

2. sort() muterar originalarrayen
- originalarrayen ändras direkt

3. toSorted()
- skapar en ny sorterad array
- originalarrayen ändras inte

4. toSorted((a, b) => a - b)
- används för nummer
- negativt tal => a före b
- positivt tal => b före a
- 0 => ingen skillnad

5. sortering av objekt
- a och b är objekt
- du jämför en property, t.ex. age

6. localeCompare()
- används för text
- bättre för alfabetisk sortering
- särskilt bra för svenska tecken som å, ä och ö
*/


// 1. Vanlig sortering med sort()
const fruits = ["mango", "apple", "banana", "kiwi"]

fruits.sort()

console.log(fruits)
// ["apple", "banana", "kiwi", "mango"]



// 2. Viktigt: sort() muterar originalarrayen
const cities = ["Malmö", "Stockholm", "Göteborg", "Lund"]

cities.sort()

console.log(cities)
// ["Göteborg", "Lund", "Malmö", "Stockholm"]

/*
Här har originalarrayen ändrats.
Det finns alltså ingen osorterad version kvar.
*/



// 3. Om du inte vill mutera originalet: använd toSorted()
const animals = ["zebra", "cat", "dog", "bear"]

const sortedAnimals = animals.toSorted()

console.log(sortedAnimals)
// ["bear", "cat", "dog", "zebra"]

console.log(animals)
// ["zebra", "cat", "dog", "bear"]



// 4. Vanlig sortering fungerar inte bra för nummer
const numbers = [9, 7, 3, 5, 8, 1, 10]

const wrongSortedNumbers = numbers.toSorted()

console.log(wrongSortedNumbers)
// [1, 10, 3, 5, 7, 8, 9]

/*
JavaScript jämför här värdena som text.
Därför hamnar 10 före 3.
*/



// 5. Rätt sätt att sortera nummer
const sortedNumbers = numbers.toSorted((a, b) => {
    return a - b
})

console.log(sortedNumbers)
// [1, 3, 5, 7, 8, 9, 10]

/*
a - b

negativt tal => a före b
positivt tal => b före a
0 => ingen skillnad
*/



// 6. Sortera objekt på ett numeriskt värde
const students = [
    { id: 1, name: "Alice", age: 23, active: true },
    { id: 2, name: "Bob", age: 19, active: false },
    { id: 3, name: "Charlie", age: 25, active: true },
    { id: 4, name: "Diana", age: 28, active: true },
    { id: 5, name: "Elias", age: 17, active: false }
]

const studentsByAge = students.toSorted((a, b) => {
    return a.age - b.age
})

console.log(studentsByAge)

/*
Här är a och b objekt.
Då måste vi jämföra en property, till exempel age.
*/



// 7. Sortera text med localeCompare()
const letters = ["z", "ä", "a"]

const sortedLetters = letters.toSorted((a, b) => {
    return a.localeCompare(b, "sv")
})

console.log(sortedLetters)
// ["a", "z", "ä"]

/*
localeCompare() är bra när du sorterar text,
särskilt om du vill att sorteringen ska följa svenska språkregler.
*/