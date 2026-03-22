// Enkla arraymetoder

let fruits = ["🍎 Apple", "🍌 Banana", "🍊 Orange", "🍓 Strawberry", "🫐 Blueberry", "🥭 Mango"]

console.log("Fruits: ", fruits)

console.log("Fruits length ", fruits.length)

fruits.push("pinaple")

console.log("Frukter efter en lagts till (🍍):", fruits)

console.log("length ", fruits.length)

console.log("Sista frukten i listan är: ", fruits.at(-1))

fruits.pop()

console.log("Sista frukten i listan är: ", fruits.at(-1))

console.log("🍌 fruits innehåller Banana: ", fruits.includes("Banana")) // true/false
console.log("🍌 Banana har platsen: ", fruits.indexOf("Banana"))  // index eller -1

//Bra för att visa att “början” är dyrare/krångligare i arrayer och att index flyttas.
fruits.unshift("🥝 Kiwi") // lägger först
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
ARRAYMETODER – FÖRMIDDAG
==============================

🟢 GRUNDER

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
*/