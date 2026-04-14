/* Sync */

const syncCoffee = "☕️"

console.log(`${syncCoffee}`)

let asyncCoffee

function makeCoffee() {
    console.log('Start coffee maker 🟢')

    //En asynkron funktion => 💥 side effect 
    setTimeout(() => {
        asyncCoffee = "☕️"
    }, 2000)

    console.log("Your coffee i being made")
}

makeCoffee()
console.log(`Your coffee is ${asyncCoffee}`)

console.log("Fixa en macka 🥙 medan jag väntar på mitt ☕️")

setTimeout(() => {
    console.log(`Your delayed ${asyncCoffee} is ready`)
}, 2500)

/* Vad är en 💥 side effects och 💎 pure functions? */

//Pure funtion (same input/output for given input)
function numbers(a, b) {
    return a + b
}

const result = numbers(1, 2)

//console.log inne i funktionen skulle gör att den inte längre vore "pure"
console.log(result)


/* Callback functions */

//Sync

function sendMessage(printMessage) {
    const message = "Call me mr. Callback"
    printMessage(message)
}

function logMessage(message) {
    console.log(message)
}

sendMessage(logMessage)

//Async

const cookRamen = (onRamenReady) => {
    setTimeout(() => {
        const ramen = "🍲"
        onRamenReady(ramen)
    }, 2000)
}

const eatRamen = (ramen) => {
    console.log(`Eat ${ramen}`)
}

cookRamen(eatRamen)
console.log("Do something else while waiting")