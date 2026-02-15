let fruits = ["banana", "orange", "kiwi", "apple"]

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

/*
Ordning
1. i=x
2. i <= fruits.length; om true:
3. console.log(fruits[i])
4. i++
5. i <= fruits.length; om true: -> kör loopen igen
*/

//for-loop med if-villkor
const names = ["Anna", "Johan", "Sara", "Erik"]

for (let i = 0; i < names.length; i++) {
    if (names[i] === "Johan") {
        console.log("⭐ VIP-hälsning till Johan!")
        names.push("Mohammed ☀️")
    } else {
        console.log("Hej " + names[i] + "!")
    }
}