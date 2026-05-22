const todoForm = document.getElementById("todoForm")
const todoInput = document.getElementById("todoInput")
const todoList = document.getElementById("todoList")

let todos = []

const createTodo = (text) => {
    return {
        id: crypto.randomUUID(),
        text: text,
        done: false
    }
}

const createDoneButton = (todo) => {
    const doneButton = document.createElement("button")
    doneButton.textContent = todo.done ? "Undo" : "Done"
    doneButton.classList.add("btn", "btn-success", "btn-sm")

    doneButton.addEventListener("click", () => {
        todo.done = !todo.done
        renderApp()
    })

    return doneButton
}

const createDeleteButton = (todo) => {
    const deleteButton = document.createElement("button")
    deleteButton.textContent = "X"
    deleteButton.classList.add("btn", "btn-danger", "btn-sm")

    deleteButton.addEventListener("click", () => {
        todos = todos.filter((currentTodo) => currentTodo.id !== todo.id)
        renderApp()
    })

    return deleteButton
}

const createButtonGroup = () => {
    const buttonGroup = document.createElement("div")
    buttonGroup.classList.add("d-flex", "gap-2")

    return buttonGroup
}

const createTodoListElement = (todo) => {
    const todoListItem = document.createElement("li")
    todoListItem.classList.add(
        "list-group-item",
        "p-3",
        "mt-3",
        "d-flex",
        "justify-content-between",
        "align-items-center"
    )

    if (todo.done) {
        todoListItem.classList.add("bg-success-subtle")
    }

    const todoText = document.createElement("span")
    todoText.textContent = todo.text

    const buttonGroup = createButtonGroup()

    const doneButton = createDoneButton(todo)
    const deleteButton = createDeleteButton(todo)

    buttonGroup.appendChild(doneButton)
    buttonGroup.appendChild(deleteButton)

    todoListItem.appendChild(todoText)
    todoListItem.appendChild(buttonGroup)

    return todoListItem
}

const renderTodoList = () => {
    todoList.innerHTML = ""

    todos.forEach((todo) => {
        const todoElement = createTodoListElement(todo)
        todoList.appendChild(todoElement)
    })
}

const renderApp = () => {
    renderTodoList()
}

todoForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const text = todoInput.value.trim()

    if (text === "") {
        todoInput.value = ""
        todoInput.focus()
        return
    }

    const newTodo = createTodo(text)

    todos.push(newTodo)
    renderApp()

    todoInput.value = ""
    todoInput.focus()
})

renderApp()