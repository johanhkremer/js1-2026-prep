//Variabler

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