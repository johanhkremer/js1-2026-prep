// ======================================================
// REPETITION – BUGGAR I JAVASCRIPT
// Lösningar med förklaringar
// ======================================================



// ======================================================
// 1. Variabelnamn
// ======================================================

let userName = "Johan"
console.log(userName)

/*
FÖRKLARING:
Det som var fel i originalkoden var att variabeln hette userName
men i console.log skrevs username.

JavaScript är känsligt för stora och små bokstäver.
userName och username räknas därför som två olika namn.
*/



// ======================================================
// 2. const och omassignering
// ======================================================

let age = 25
age = 26

console.log(age)

/*
FÖRKLARING:
Det som var fel i originalkoden var att variabeln skapades med const
och sedan försökte man ändra värdet.

const betyder att variabeln inte får tilldelas ett nytt värde.
Om värdet ska kunna ändras måste vi använda let istället.
*/



// ======================================================
// 3. if/else med fel operator
// ======================================================

let isLoggedIn = false

if (isLoggedIn === true) {
    console.log("Inloggad")
} else {
    console.log("Inte inloggad")
}

/*
FÖRKLARING:
Det som var fel i originalkoden var att man skrev = istället för ===.

= betyder tilldelning
=== betyder jämförelse

När man skriver:
if (isLoggedIn = true)

så sätter man variabeln till true istället för att jämföra den.
Därför blir resultatet fel.
*/


// En enklare och vanligare variant:
if (isLoggedIn) {
    console.log("Inloggad")
} else {
    console.log("Inte inloggad")
}

/*
FÖRKLARING:
Eftersom isLoggedIn redan är ett boolean-värde
kan vi skriva bara if (isLoggedIn).
Det betyder i praktiken:
"om isLoggedIn är true"
*/



// ======================================================
// 4. Loop med fel villkor
// ======================================================

for (let i = 0; i < 5; i++) {
    console.log(i)
}

/*
FÖRKLARING:
Det som var fel i originalkoden var att villkoret var i > 5.

Men i börjar på 0.
0 är inte större än 5, så loopen körs aldrig.

Med i < 5 körs loopen så länge i är mindre än 5.
Då skrivs 0, 1, 2, 3 och 4 ut.
*/



// ======================================================
// 5. Funktion utan tillräckligt många argument
// ======================================================

function multiply(a, b) {
    return a * b
}

console.log(multiply(5, 2))

/*
FÖRKLARING:
Det som var fel i originalkoden var att funktionen fick bara ett argument.

Funktionen väntar sig två värden:
a och b

Om vi bara skickar in ett värde blir b undefined.
Då blir resultatet:
5 * undefined = NaN

NaN betyder "Not a Number".
*/



// ======================================================
// 6. return saknas
// ======================================================

function getFullName(firstName, lastName) {
    return firstName + " " + lastName
}

console.log(getFullName("Anna", "Andersson"))

/*
FÖRKLARING:
Det som var fel i originalkoden var att funktionen byggde ihop texten,
men inte returnerade den.

Utan return skickar funktionen inte tillbaka något värde.
Då blir resultatet undefined.

return behövs när vi vill att funktionen ska ge tillbaka ett resultat.
*/



// ======================================================
// 7. Scope
// ======================================================

function showMessage() {
    let message = "Hej!"
    return message
}

console.log(showMessage())

/*
FÖRKLARING:
Det som var fel i originalkoden var att variabeln message skapades
inne i funktionen men användes utanför funktionen.

Variabler som skapas inne i en funktion finns bara där inne.
Det kallas scope.

För att kunna använda värdet utanför funktionen
kan vi returnera det och sedan logga funktionsanropet.
*/


// Alternativ lösning:
function showMessageAgain() {
    let message = "Hej igen!"
    console.log(message)
}

showMessageAgain()

/*
FÖRKLARING:
Här använder vi variabeln inne i samma funktion där den skapades.
Då fungerar det också bra.
*/



// ======================================================
// 8. map utan return
// ======================================================

const numbers = [1, 2, 3]

const doubled = numbers.map((number) => {
    return number * 2
})

console.log(doubled)

/*
FÖRKLARING:
Det som var fel i originalkoden var att callback-funktionen i map
inte returnerade något.

map används för att skapa en ny array.
För varje element måste callbacken returnera ett nytt värde.

Om return saknas blir resultatet:
[undefined, undefined, undefined]
*/


// Kortare variant:
const doubledShort = numbers.map(number => number * 2)
console.log(doubledShort)

/*
FÖRKLARING:
När vi skriver arrow function på en rad utan klamrar
sker return automatiskt.
*/



// ======================================================
// 9. filter utan return
// ======================================================

const ages = [12, 18, 25, 15]

const adults = ages.filter((age) => {
    return age >= 18
})

console.log(adults)

/*
FÖRKLARING:
Det som var fel i originalkoden var att callback-funktionen i filter
inte returnerade något.

filter används för att välja vilka värden som ska vara kvar.
Callbacken måste returnera true eller false.

Om villkoret är true stannar värdet kvar.
Om villkoret är false tas det bort.
*/


// Kortare variant:
const adultsShort = ages.filter(age => age >= 18)
console.log(adultsShort)



// ======================================================
// 10. filter + map med två buggar
// ======================================================

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

/*
FÖRKLARING:
Det fanns två buggar i originalkoden.

BUGG 1:
I filter användes = istället för ===.
Då tilldelades värdet true istället för att jämföras.

BUGG 2:
I map saknades return.
Då skickades inga namn tillbaka.

Här gör filter först en ny array med bara aktiva studenter.
Sedan gör map en ny array med bara deras namn.
*/


// Kortare och mer vanlig variant:
const activeStudentsShort = students
    .filter(student => student.active)
    .map(student => student.name)

console.log(activeStudentsShort)

/*
FÖRKLARING:
Här räcker det att skriva student.active i filter,
eftersom det redan är ett boolean-värde.
Om student.active är true så behålls objektet.
*/



// ======================================================
// SLUTKOMMENTAR
// ======================================================

/*
GEMENSAMT MÖNSTER I MÅNGA AV BUGGARNA:

1. Fel variabelnamn
2. Fel operator
3. Saknat return
4. Fel scope
5. Fel antal argument
6. Missförstånd kring hur map och filter fungerar

BRA FRÅGOR ATT STÄLLA NÄR MAN FELSÖKER:

- Vad förväntar jag mig att koden ska göra?
- Vad gör koden faktiskt?
- Vilket värde returneras?
- Var finns variabeln?
- Är detta en jämförelse eller en tilldelning?
*/