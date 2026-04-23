//! Typkonvertering + -

/* Logiska operatorer */

/* Glöm inte be dem gissa vad resultatet blir och diskutera varför det blir ett visst resultat */

// Jämförelser
console.log("5 > 3:", 5 > 3);
console.log("5 < 3:", 5 < 3);
console.log("10 >= 10:", 10 >= 10);
console.log("4 <= 2:", 4 <= 2);
console.log("false < true:", false < true);

// == jämför värde
console.log("5 == '5':", 5 == "5");

// === jämför värde + typ
console.log("5 === '5':", 5 === "5");

// Strängar
console.log("'string' == 'string':", "string" == "string");
console.log("'string' === 'string':", "string" === "string");

// Typkonvertering
console.log("'false' == false:", "false" == false);
console.log("0 == false:", 0 == false);
console.log("0 === false:", 0 === false);

//! Vanligast och säkrast att använda ===

/* 
Program = ett komplett system med tydlig struktur, ofta större och mer självständigt.

Script = en mindre kodfil som körs för att göra något specifikt.
*/

//if
const age = 20;
if (age >= 18) {
    console.log("Du är myndig ✅");
}

if (age < 18) {
    console.log("Du är inte myndig 🚨");
}

//if else
if (age >= 18) {
    console.log("Du är myndig ✅");
} else {
    console.log("Du är inte myndig 🚨");
}

const temperature = 25;
if (temperature > 20) {
    console.log("Det är varmt 🥵");
} else {
    console.log("Det är kallt 🥶");
}

// &&
const hasPassword = true;
const isAdmin = true;

if (hasPassword && isAdmin) {
    console.log("Du får tillgång till systemet 🔓");
} else {
    console.log("Du får inte tillgång till systemet 🚨")
}

// ||
const isMember = false;
const hasCoupon = true;

if (isMember || hasCoupon) {
    console.log("Du får rabatt");
}
