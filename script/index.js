let fruits = ["Apple", "Banana", "Orange", "Strawberry", "Blueberry", "Mango"]

console.log("🍊, 🍌, 🥭", fruits)

console.log("length ", fruits.length)

fruits.push("pinaple")

console.log("🍍 Frukter efter en lagts till:", fruits)

console.log("length ", fruits.length)

console.log("Sista frukten i listan är: ", fruits.at(-1))

fruits.pop()

console.log("Sista frukten i listan är: ", fruits.at(-1))

console.log("🍌 fruits innehåller Banana: ", fruits.includes("Banana")) // true/false
console.log("🍌 Banana har platsen: ", fruits.indexOf("Banana"))  // index eller -1

//Bra för att visa att “början” är dyrare/krångligare i arrayer och att index flyttas.
fruits.unshift("Kiwi") // lägger först
console.log(fruits)

const first = fruits.shift() // tar bort första
console.log("Tog bort:", first)
console.log(fruits)

const someFruits = fruits.slice(1, 4) // tar ut en del
console.log("Original:", fruits)
console.log("Ny:", someFruits)

console.log(fruits.join(", 😋 "))

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
