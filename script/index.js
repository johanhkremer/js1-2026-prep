const todoForm = document.getElementById("todoForm")
const todoInput = document.getElementById("todoInput")
const todoHelp = document.getElementById("todoHelp")
const controlsContainer = document.getElementById("controlsContainer")
const todoList = document.getElementById("todoList")

let todos = []

const saveTodo = (text) => {
    return {
        id: crypto.randomUUID(),
        text: text,
        done: false,
        createdAt: new Date().toISOString()
    }
}

const saveTodosInLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
}

const getTodosFromLocalStorage = () => {
    const storedTodos = localStorage.getItem("todos")

    if (storedTodos) {
        todos = JSON.parse(storedTodos)
    }
}

const createTodoItem = (todoData) => {
    const todoLi = document.createElement("li")
    todoLi.classList.add("list-group-item", "p-3", "mt-3", "d-flex", "justify-content-between", "align-items-center")

    const text = todoData.text
    const todoText = createTodoText(text)

    if (todoData.done) {
        todoLi.classList.add("bg-success-subtle")
    }

    todoLi.appendChild(todoText)

    return todoLi
}

const createTodoText = (text) => {
    const todoText = document.createElement("span")
    todoText.textContent = text
    return todoText
}

const createDoneButton = (todoData) => {
    const doneButton = document.createElement("button")
    doneButton.textContent = "Done"
    doneButton.classList.add("btn", "btn-success", "btn-sm")

    doneButton.addEventListener("click", () => {
        todoData.done = !todoData.done
        saveTodosInLocalStorage()
        renderTodos()
    })

    return doneButton
}

const createDeleteButton = (todoData) => {
    const deleteButton = document.createElement("button")
    deleteButton.textContent = "X"
    deleteButton.classList.add("btn", "btn-danger", "btn-sm")

    deleteButton.addEventListener("click", () => {
        todos = todos.filter(todo => todo.id !== todoData.id)
        saveTodosInLocalStorage()
        renderTodos()
    })

    return deleteButton
}

const createButtonWrapper = () => {
    const buttonWrapper = document.createElement("div")
    buttonWrapper.classList.add("d-flex", "gap-2")

    return buttonWrapper
}

const createTodoElement = (todoData) => {
    const todo = createTodoItem(todoData)

    const buttonWrapper = createButtonWrapper()

    const doneButton = createDoneButton(todoData)
    const deleteButton = createDeleteButton(todoData)

    buttonWrapper.appendChild(doneButton)
    buttonWrapper.appendChild(deleteButton)
    todo.appendChild(buttonWrapper)

    return todo
}

const renderTodos = () => {
    todoList.innerHTML = ""

    todos.forEach(todo => {
        const todoElement = createTodoElement(todo)
        todoList.appendChild(todoElement)
    })
}

const createFilterButton = () => {
    const filterButton = document.createElement("button")
    filterButton.textContent = "Remove finished todos"
    filterButton.classList.add("btn", "btn-info")

    controlsContainer.appendChild(filterButton)

    filterButton.addEventListener("click", () => {
        todos = todos.filter((todo) => !todo.done)
        saveTodosInLocalStorage()
        renderTodos()
    })
}

todoForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const text = todoInput.value

    if (text.trim() === "") {
        todoInput.value = ""
        todoInput.focus()
        return
    }

    const savedTodo = saveTodo(text)

    todos.push(savedTodo)

    saveTodosInLocalStorage()

    renderTodos()

    todoInput.value = ""
    todoInput.focus()
})

getTodosFromLocalStorage()
renderTodos()
if (todos.length > 0) {
    createFilterButton()
}

/* 
? event.preventDefault() 

Ett formulär försöker som standard skicka data och ladda om sidan.
Eftersom vi vill hantera formuläret själva med JavaScript
stoppar vi det vanliga beteendet med preventDefault().
Annars hinner sidan laddas om innan vi kan jobba vidare med värdet.
*/