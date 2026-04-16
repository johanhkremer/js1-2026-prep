const ramenContainer = document.getElementById("ramen")
const todosContainer = document.getElementById("todos")

//Create promise 🤝
const waitForRamen = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("🍜")
        }, 2000)
    })
}

//Receive promise
const makeRamen = async () => {
    console.log("Making ramen ⏱️")
    const ramen = await waitForRamen()
    console.log(`Eat ${ramen}`)

    ramenContainer.innerHTML = `<h2>Eat ${ramen}</h2>`
}

makeRamen()

//Promise, fetch, render

let todos = []

const getData = async () => {
    // fetch returnerar en promise 🤝
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    // response.json() returnerar också en promise
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