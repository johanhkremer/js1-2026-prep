let numbers = [1, 2, 3, 4, 5]

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

numbers.forEach(function (number) {
    console.log("forEach", number)
})

numbers.forEach(number => console.log("forEach 🏹-function", number))

numbers.forEach((number) => console.log(number + 2))

console.log(numbers.forEach((number) => console.log(number + 2)))

console.log(numbers.map((number) => console.log(number + 2)))

//Skilland mellan forEach() => arbater med samma array i minnet och map() => map skapar en ny array i minnet

const studentNames = ["Eva", "Stefan", "Malin", "Mohammed"]

//Prova med forEach, undefined och map (ny array i minnet)
let names = studentNames.forEach(name => name.toLocaleLowerCase())
console.log(names)

const filterdNumbers = numbers.filter((number) => { number <= 3 })
console.log(filterdNumbers)

const filterdNames = studentNames.filter(name => name.includes("M"))
console.log(filterdNames)

/*
==============================
ARRAYMETODER – SNABBÖVERSIKT
==============================

🟢 UTAN CALLBACK

length
- Antal element i arrayen
- Syntax: array.length

at()
- Hämtar element på index (kan använda -1 för sista)
- Syntax: array.at(index)

push()
- Lägger till i slutet
- Syntax: array.push(value)

pop()
- Tar bort sista elementet
- Syntax: array.pop()

shift()
- Tar bort första elementet
- Syntax: array.shift()

unshift()
- Lägger till i början
- Syntax: array.unshift(value)

includes()
- Kollar om värde finns (true/false)
- Syntax: array.includes(value)

indexOf()
- Returnerar index för värde (eller -1)
- Syntax: array.indexOf(value)

join()
- Gör om array till sträng
- Syntax: array.join(separator)

slice()
- Skapar kopia av del av array (ändrar inte original)
- Syntax: array.slice(start, end)

concat()
- Slår ihop arrayer
- Syntax: array.concat(otherArray)


🟡 MED CALLBACK (vanliga)

forEach()
- Kör kod för varje element
- Syntax: array.forEach(element => { })

find()
- Returnerar första matchande värdet
- Syntax: array.find(element => condition)

findIndex()
- Returnerar index för första match
- Syntax: array.findIndex(element => condition)

filter()
- Returnerar alla som matchar villkor
- Syntax: array.filter(element => condition)

map()
- Skapar ny array genom att ändra varje element
- Syntax: array.map(element => newValue)

some()
- Minst ett element uppfyller villkoret (true/false)
- Syntax: array.some(element => condition)

every()
- Alla element uppfyller villkoret (true/false)
- Syntax: array.every(element => condition)


🔵 MER AVANCERAD

reduce()
- Samlar ihop array till ett värde (t.ex. summa)
- Syntax: array.reduce((acc, element) => { return newValue }, startValue)

sort()
- Sorterar array (ändrar original)
- Syntax: array.sort()
- Med compare: array.sort((a, b) => a - b)
*/