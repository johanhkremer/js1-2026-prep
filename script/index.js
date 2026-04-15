//Synkront, rad för rad, blockerande 🛑
console.log("Synkron räkning")
console.log("------------")
console.log("1")
console.log("2")
console.log("3")


//Asynkront, sätt igång en process och gå vidare till nästa, ej blockerande ✅
console.log("Asynkron räkning")
console.log("------------")
console.log("1")

setTimeout(() => {
    console.log("2")
}, 0)

console.log("3")

//Callback Hell 👹🔥

const step1 = (callback) => {
    setTimeout(() => {
        console.log("Steg 1 klart")
        callback()
    }, 500)
}

const step2 = (callback) => {
    setTimeout(() => {
        console.log("Steg 2 klart")
        callback()
    }, 500)
}

const step3 = (callback) => {
    setTimeout(() => {
        console.log("Steg 3 klart")
        callback()
    }, 500)
}

const step4 = (callback) => {
    setTimeout(() => {
        console.log("Steg 4 klart")
        callback()
    }, 500)
}

step1(() => {
    step2(() => {
        step3(() => {
            step4(() => {
                console.log("Alla steg klara")
            })
        })
    })
})