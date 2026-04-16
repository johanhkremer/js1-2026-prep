//Promises 👼🌞

//Create promise
function makeRamen() {
    return new Promise(function (resolve, reject) {
        const hasNoodles = true

        setTimeout(() => {
            console.log("Trying to make ramen...")
            if (hasNoodles) {
                resolve("🍜")
            } else {
                reject("🛑 No noodles left")
            }
        }, 1000)
    })
}

// const ramenPromise = makeRamen()

// console.log(ramenPromise)

// setTimeout(() => {
//     console.log(ramenPromise)
// }, 1500)

function boilEgg(ramen) {
    return new Promise(function (resolve, reject) {
        const hasEgg = true

        setTimeout(() => {
            console.log("Trying to boil egg...")
            if (hasEgg) {
                resolve(ramen + " 🥚")
            } else {
                reject("🛑 All the chickens are dead")
            }
        }, 1000)
    })
}

function eatRamen(ramen) {
    console.log("Lets eat ramen 🍜🎉")
}

function onSuccess(data) {
    console.log("We made:", data)
}

function onError(error) {
    console.log("We couldn't make ramen because:", error)
}

//Recive promise
makeRamen()
    .then(boilEgg)
    .then(onSuccess)
    .catch(onError)
    .finally(eatRamen)

// .then((ramen) => {
//     return boilEgg(ramen).catch(() => {
//         return ramen
//     })
// })

//Ytterligare ett exempel

const step1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Steg 1 klart")
            resolve()
        }, 2500)
    })
}

const step2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Steg 2 klart")
            resolve()
        }, 500)
    })
}

const step3 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Steg 3 klart")
            resolve()
        }, 500)
    })
}

const step4 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Steg 4 klart")
            resolve()
        }, 500)
    })
}

step1()
    .then(step2)
    .then(step3)
    .then(step4)
    .then(() => {
        console.log("Alla steg klara")
    })