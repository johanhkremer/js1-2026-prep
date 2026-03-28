const todoForm = document.getElementById("todoForm")
const todoInput = document.getElementById("todoInput")
const todoListView = document.getElementById("todoListView")
const todoDetailView = document.getElementById("todoDetailView")
const todoList = document.getElementById("todoList")

let todos = []
let selectedTodoId = null

const createTodo = (text) => {
    return {
        id: crypto.randomUUID(),
        text: text,
        done: false,
        createdAt: new Date().toISOString()
    }
}

const saveTodosToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
}

const loadTodosFromLocalStorage = () => {
    const storedTodos = localStorage.getItem("todos")

    if (storedTodos) {
        todos = JSON.parse(storedTodos)
    }
}

const getSelectedTodo = () => {
    return todos.find((todo) => todo.id === selectedTodoId)
}

const createTodoTextElement = (todo) => {
    const todoText = document.createElement("span")
    todoText.classList.add("cursor-pointer")
    todoText.textContent = todo.text

    todoText.addEventListener("click", () => {
        selectedTodoId = todo.id
        renderApp()
    })

    return todoText
}

const createTodoListItem = (todo) => {
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

    const todoTextElement = createTodoTextElement(todo)
    todoListItem.appendChild(todoTextElement)

    return todoListItem
}

const createTodoDetailCard = (todo) => {
    const todoDetailCard = document.createElement("div")
    todoDetailCard.classList.add("p-3", "border", "rounded", "mt-3")

    if (todo.done) {
        todoDetailCard.classList.add("bg-success-subtle")
    }

    const todoTitle = document.createElement("h2")
    todoTitle.textContent = todo.text

    const todoStatus = document.createElement("p")
    todoStatus.textContent = todo.done ? "Status: Klar ✅" : "Status: Inte klar 🛑"

    const todoCreatedAt = document.createElement("p")
    todoCreatedAt.textContent = `Skapad: ${new Date(todo.createdAt).toLocaleString("sv-SE")}`

    todoDetailCard.appendChild(todoTitle)
    todoDetailCard.appendChild(todoStatus)
    todoDetailCard.appendChild(todoCreatedAt)

    return todoDetailCard
}

const createDoneButton = (todo) => {
    const doneButton = document.createElement("button")
    doneButton.textContent = "Done"
    doneButton.classList.add("btn", "btn-success", "btn-sm")

    doneButton.addEventListener("click", () => {
        todo.done = !todo.done
        saveTodosToLocalStorage()
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

        if (selectedTodoId === todo.id) {
            selectedTodoId = null
        }

        saveTodosToLocalStorage()
        renderApp()
    })

    return deleteButton
}

const createBackButton = () => {
    const backButton = document.createElement("button")
    backButton.textContent = "Back to list"
    backButton.classList.add("btn", "btn-secondary", "mb-3", "mt-3")

    backButton.addEventListener("click", () => {
        selectedTodoId = null
        renderApp()
    })

    return backButton
}

const createButtonGroup = () => {
    const buttonGroup = document.createElement("div")
    buttonGroup.classList.add("d-flex", "gap-2")

    return buttonGroup
}

const createTodoListElement = (todo) => {
    const todoListItem = createTodoListItem(todo)
    const buttonGroup = createButtonGroup()

    const doneButton = createDoneButton(todo)
    const deleteButton = createDeleteButton(todo)

    buttonGroup.appendChild(doneButton)
    buttonGroup.appendChild(deleteButton)
    todoListItem.appendChild(buttonGroup)

    return todoListItem
}

const renderTodoListView = () => {
    todoListView.classList.remove("d-none")
    todoDetailView.classList.add("d-none")
    todoList.innerHTML = ""

    todos.forEach((todo) => {
        const todoElement = createTodoListElement(todo)
        todoList.appendChild(todoElement)
    })
}

const renderTodoDetailView = () => {
    const selectedTodo = getSelectedTodo()

    if (!selectedTodo) {
        selectedTodoId = null
        renderTodoListView()
        return
    }

    todoListView.classList.add("d-none")
    todoDetailView.classList.remove("d-none")
    todoDetailView.innerHTML = ""

    const backButton = createBackButton()
    const todoDetailCard = createTodoDetailCard(selectedTodo)

    todoDetailView.appendChild(todoDetailCard)
    todoDetailView.appendChild(backButton)
}

const renderApp = () => {
    if (selectedTodoId === null) {
        renderTodoListView()
    } else {
        renderTodoDetailView()
    }
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
    saveTodosToLocalStorage()
    renderApp()

    todoInput.value = ""
    todoInput.focus()
})

loadTodosFromLocalStorage()
renderApp()