// Variabler

// const
const konstant = 123
console.log("✅ const först:", konstant)

try {
    konstant = 42
} catch (error) {
    console.log("❌ const går inte att ändra:", error.message)
}

console.log("😒 const efter försök:", konstant)

// let
let looseyGoosey = "Älg"
console.log("✅ let först:", looseyGoosey)

looseyGoosey = "Anka"
console.log("✅ let efter:", looseyGoosey)

// var
var oldSchool = 10
console.log("var först:", oldSchool)

oldSchool = 20
console.log("var efter:", oldSchool)

Blockscope
{
    var x = "var";
    let y = "let";
}

console.log(x); // "var"
console.log(y); // ReferenceError: y is not defined

// Hositing
console.log(a); // undefined (var hoistas)
var a = 1;

console.log(b); // ReferenceError (temporal dead zone)
let b = 1;

// Undefined & null
let user;
// undefined = variabeln finns, men har inget värde än

user = null;
// null = vi har medvetet sagt att det inte finns någon användare
// Vi kan skriva user = undefined, men det är generellt dålig praxis eftersom undefined normalt är något JavaScript sätter själv.