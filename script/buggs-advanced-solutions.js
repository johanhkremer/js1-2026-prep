// ======================================================
// SVÅRARE BUGGAR I JAVASCRIPT
// Lösningar med förklaringar
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

/*
FÖRKLARING:
Den här koden är inte trasig rent tekniskt, men den är bra att diskutera.

En tom sträng ("") räknas som falsy i JavaScript.
Det betyder att villkoret i if-satsen blir false.

Därför skrivs:
"Inget användarnamn"

Det här är en bra övning för att prata om truthy och falsy.
Många tror att en tom sträng ska räknas som true, men så är det inte.

Falsy värden som är vanliga att känna till:
- false
- 0
- ""
- null
- undefined
- NaN
*/



// ======================================================
// 2. Off-by-one i loop
// ======================================================

const fruits = ["äpple", "banan", "mango"]

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

/*
FÖRKLARING:
Det som var fel i originalkoden var att loopen använde:
i <= fruits.length

fruits.length är 3
men sista giltiga index är 2

Arrayen ser alltså ut så här:
0 -> "äpple"
1 -> "banan"
2 -> "mango"

Om i blir 3 försöker vi läsa fruits[3], och det är undefined.

Det här kallas ofta ett off-by-one-fel.
*/



// ======================================================
// 3. Return inuti loop
// ======================================================

function findFirstBigNumber(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 10) {
            return numbers[i]
        }
    }

    return "Inget tal över 10"
}

console.log(findFirstBigNumber([3, 5, 12, 8]))

/*
FÖRKLARING:
Det som var fel i originalkoden var att funktionen returnerade för tidigt.

I originalet låg else med return inne i loopen.
Det betydde att funktionen redan på första varvet kunde säga:
"Inget tal över 10"

Det blir fel om första talet inte är över 10,
men ett senare tal faktiskt är det.

Rätt lösning är:
- loopa igenom alla tal
- returnera direkt om vi hittar ett tal över 10
- om inget hittas, returnera meddelandet först efter loopen
*/



// ======================================================
// 4. map med objekt
// ======================================================

const products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 200 }
]

const names = products.map((product) => {
    return product.name
})

console.log(names)

/*
FÖRKLARING:
Det som var fel i originalkoden var att den försökte läsa product.title.

Men objekten har ingen property som heter title.
De har:
- name
- price

När man försöker läsa en property som inte finns får man undefined.

Därför blev resultatet:
[undefined, undefined]

Rätt property är product.name
*/



// ======================================================
// 5. filter med fel typ
// ======================================================

const numbers = [1, 2, 3, 4, 5]

const result = numbers.filter((number) => {
    return number === 3
})

console.log(result)

/*
FÖRKLARING:
Det som var fel i originalkoden var att man jämförde ett number med en string.

I arrayen finns siffror:
1, 2, 3, 4, 5

Men i villkoret stod:
number === "3"

"3" är en sträng
3 är ett tal

Eftersom === jämför både värde och datatyp blir detta false.

Rätt jämförelse är:
number === 3
*/



// ======================================================
// 6. Variabelscope i loop
// ======================================================

let message = ""

for (let i = 0; i < 3; i++) {
    message = `Varv ${i}`
}

console.log(message)

/*
FÖRKLARING:
Det som var fel i originalkoden var att message skapades med let
inne i loopblocket och sedan användes utanför.

Variabler som skapas inne i ett block med let eller const
finns bara inne i just det blocket.

Eftersom message behövdes utanför loopen
måste den deklareras utanför.

OBS:
Den här lösningen gör att message till slut innehåller sista värdet:
"Varv 2"
*/



// ======================================================
// 7. Funktion anropas för tidigt
// ======================================================

const sum = function (a, b) {
    return a + b
}

console.log(sum(2, 3))

/*
FÖRKLARING:
Det som var fel i originalkoden var att funktionen anropades
innan variabeln sum hade fått sitt värde.

Det här är en function expression:
const sum = function (a, b) { ... }

En sådan fungerar inte på samma sätt som en function declaration.

Det går inte att anropa den innan raden där den skapas.
Därför måste vi definiera funktionen först och anropa den efteråt.
*/


// Exempel på function declaration:
function add(a, b) {
    return a + b
}

console.log(add(4, 5))

/*
FÖRKLARING:
Den här varianten är en function declaration.
Den beter sig annorlunda och kan anropas tidigare i filen.
Det här är bra att visa om du vill jämföra de två sätten.
*/



// ======================================================
// 8. Mutation av array av misstag
// ======================================================

const numbersList = [3, 1, 2]

const sortedNumbers = [...numbersList].sort()

console.log("Original:", numbersList)
console.log("Ny:", sortedNumbers)

/*
FÖRKLARING:
Det som var fel i originalkoden var inte att sorteringen "inte fungerade",
utan att sort() ändrar originalarrayen.

sort() muterar arrayen.
Det betyder att den ändrar den befintliga arrayen istället för att skapa en ny.

Om vi vill behålla originalet orört kan vi först kopiera arrayen:
[...numbersList]

Sedan sorterar vi kopian istället.
*/


// Viktig bonus:
const numberOrderExample = [10, 2, 5]
console.log(numberOrderExample.sort())

/*
FÖRKLARING:
sort() sorterar som standard lexikografiskt, alltså som text.

Det betyder att [10, 2, 5] kan bli:
[10, 2, 5]

för att "10" jämförs som text.

Om man vill sortera numeriskt använder man ofta:
array.sort((a, b) => a - b)
*/

const correctNumberOrder = [10, 2, 5].sort((a, b) => a - b)
console.log(correctNumberOrder)



// ======================================================
// 9. filter + includes
// ======================================================

const words = ["html", "css", "javascript", "react"]

const longWords = words.filter((word) => {
    return word.length > 3
})

console.log(longWords)

/*
FÖRKLARING:
Det som var fel i originalkoden var att includes användes som om det vore ett värde.

Det stod:
word.includes > 3

Men includes är en metod, alltså en funktion som måste anropas.

Dessutom passar includes inte för att kontrollera längden på ett ord.
Om vi vill veta hur långt ordet är ska vi använda:
word.length

Då kan vi filtrera ut ord som är längre än 3 tecken.
*/


// Exempel där includes faktiskt är rätt:
const wordsWithA = words.filter((word) => {
    return word.includes("a")
})

console.log(wordsWithA)

/*
FÖRKLARING:
Här används includes på rätt sätt.
Vi frågar om ordet innehåller bokstaven "a".
Det ger true eller false.
*/



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
        return user.name.toUpperCase()
    })

console.log(resultUsers)

/*
FÖRKLARING:
Det som var fel i originalkoden var att map saknade return.

filter-delarna fungerade:
- först väljs alla över 18
- sedan väljs bara de som är aktiva

Men i map callbacken skrevs bara:
user.name.toUpperCase()

utan return

Då skickades inget värde tillbaka,
och resultatet blev [undefined]

När vi lägger till return får vi istället en ny array
med namn i versaler.
*/


// Kortare variant:
const resultUsersShort = users
    .filter(user => user.age > 18)
    .filter(user => user.active)
    .map(user => user.name.toUpperCase())

console.log(resultUsersShort)



// ======================================================
// SLUTKOMMENTAR
// ======================================================

/*
GEMENSAMT FÖR DE HÄR SVÅRARE BUGGARNA:

1. Koden kan ibland köra utan syntaxfel men ändå bli fel
2. Många buggar handlar om logik, inte syntax
3. Man måste förstå:
   - vad som returneras
   - vad som är truthy/falsy
   - hur loopar fungerar
   - hur scope fungerar
   - hur array-metoder fungerar
   - skillnaden mellan mutation och att skapa nytt

BRA FELSÖKNINGSFRÅGOR:

- Körs koden alls?
- Ger koden rätt resultat?
- Returneras rätt värde?
- Jämför jag rätt datatyper?
- Finns variabeln där jag försöker använda den?
- Ändrar jag originaldata av misstag?
*/