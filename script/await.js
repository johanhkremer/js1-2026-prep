/*
async/await används för att hantera asynkron kod på ett sätt som ser mer synkront och lättläst ut.

- async gör att en funktion alltid returnerar ett Promise
- await pausar koden tills ett Promise är klart
- det gör koden enklare att läsa än .then()

Exempel:
const getData = async () => {
    const response = await fetch(url)
    const data = await response.json()
    return data
}

Kort sagt:
async = funktionen hanterar asynkron kod
await = vänta på att något ska bli klart
*/

const ramenContainer = document.getElementById("ramen")
const todosContainer = document.getElementById("todos")

//Create promise 🤝
const waitForRamen = () => {
    return new Promise((resolve, reject) => {
        const hasNooodles = true
        if (hasNooodles) {
            setTimeout(() => {
                resolve("🍜")
            }, 2000)
        } else {
            reject("Out of noodles")
        }
    })
}

//Receive promise
const makeRamen = async () => {
    // if/else = för vanliga beslut i logiken
    // try/catch = för felhantering

    try {
        console.log("Making ramen ⏱️")
        const ramen = await waitForRamen()
        console.log(`Eat ${ramen}`)

        ramenContainer.innerHTML = `<h2>Eat ${ramen}</h2>`
    } catch (error) {
        console.log("Error", error)
        ramenContainer.innerHTML = error
    }
}

makeRamen()

//Promise, fetch, render
//! Vänta till nästa lektion om ont med tid

let todos = []

const getData = async () => {
    // fetch returnerar en promise 🤝
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    // response.json() returnerar också en promise
    console.log(response)
    const data = await response.json()
    todos = data.slice(0, 10)
    renderTodos()
}

const renderTodos = () => {
    const todosList = todos.map((todo) => {
        return `<p>${todo.id} ${todo.title}</p>`
    }).join("")

    todosContainer.innerHTML = todosList
}

getData()

//Steps

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

const runSteps = async () => {
    await step1()
    await step2()
    await step3()
    await step4()
    console.log("Alla steg klara")
}

runSteps()