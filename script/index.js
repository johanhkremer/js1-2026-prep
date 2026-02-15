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
for (start; villkor; uppdatering) {
    vad ska hända vid varje loop?
 }
*/

//for loop

for (let i = 0; i <= 10; i++) {
    console.log(i)
    console.log(i + 10)
    console.log("Hej hopp vi kan räkna")
}

// ++ är samma som += 1

//while loop

let i = 1

while (i <= 5) {
    console.log(i)
    i++
}

// Utan i++ så hamnar vi i en infinie loop