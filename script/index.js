// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// Inte DRY, hur kan vi effektivisera detta?

/* 
for (loop variabel; villkor; uppdatering) {
    vad ska hända vid varje loop?
 }
*/

//!for loop (Används oftast när du redan vet ungefär hur många gånger något ska köras.)

for (let i = 0; i < 10; i++) {
    console.log("🔄 for loop", i)
}

// i = i + 1 eller i += (skriver vi så att variabeln i ska ändras) eller i++

// i = 0; i < 10 eller i = 1; i <= 10

// ++ är samma som += 1

// Utan i++ så hamnar vi i en infinie loop

//!while loop (Används när du vill köra så länge ett villkor är sant, men du inte nödvändigtvis vet i förväg hur många varv det blir.)

//Ligger utanför scope
let number = 0

while (number < 10) {

    if (number <= 0) {
        console.log("starta räkningen!")
    }

    console.log("🔄 while loop", number)

    if (number >= 10) {
        console.log("Vi är i mål!")
    }

    number++
}

//!do-while loop (Fungerar nästan som while, men den kör alltid minst en gång eftersom villkoret kollas efteråt.)

let i = 0

do {
    console.log("🔄 Do while loop", i)
    i++
} while (i < 5)