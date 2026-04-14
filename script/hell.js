// Callback hell uppstår när vi löser flera asynkrona steg genom att lägga en callback inuti en annan callback, och sedan ännu en, och ännu en.

// Då fungerar koden kanske fortfarande, men den blir snabbt:

// svår att läsa
// svår att förstå
// svår att felsöka
// svår att bygga vidare på

// Man brukar också kalla det för “pyramid of doom”, eftersom koden börjar skjutas längre och längre åt höger.

//Stegen är kopplade till varandra
setTimeout(() => {
    console.log("Paketet har registrerats")

    setTimeout(() => {
        console.log("Paketet har skickats")

        setTimeout(() => {
            console.log("Paketet är i Malmö")

            setTimeout(() => {
                console.log("Paketet har levererats 📦")
            }, 1000)

        }, 1000)

    }, 1000)

}, 1000)

//Stegen är inte kopplade till varandra
setTimeout(() => {
    console.log("Paketet har registrerats")
}, 1000)

setTimeout(() => {
    console.log("Paketet har skickats")
}, 2000)

setTimeout(() => {
    console.log("Paketet är i Malmö")
}, 3000)

setTimeout(() => {
    console.log("Paketet har levererats 📦")
}, 4000)

//Mer verklighetsnära exempel
loginUser("johan", "1234", (user) => {
    console.log("Inloggad:", user.name)

    getOrders(user.id, (orders) => {
        console.log("Ordrar hämtade:", orders)

        getOrderDetails(orders[0].id, (orderDetails) => {
            console.log("Orderdetaljer hämtade:", orderDetails)

            renderOrder(orderDetails, () => {
                console.log("Ordern är nu renderad på sidan")
            })
        })
    })
})

/*
Hur löser vi callback hell? 👹🔥

Promises + async/await

*/