const todoForm = document.getElementById("todoForm")
const todoInput = document.getElementById("todoInput")
const todoHelp = document.getElementById("todoHelp")
const todoList = document.getElementById("todoList")

const createTodo = (text) => {
    const todoLi = document.createElement("li")
    const todoText = document.createElement("span")
    todoLi.classList.add("list-group-item", "p-3", "mt-3", "d-flex", "justify-content-between", "align-items-center")

    todoText.textContent = text

    todoLi.appendChild(todoText)

    return todoLi
}

const createDoneButton = (todo) => {
    const doneButton = document.createElement("button")
    doneButton.textContent = "Done"
    doneButton.classList.add("btn", "btn-success", "btn-sm")

    doneButton.addEventListener("click", () => {
        todo.classList.toggle("bg-success-subtle")
    })

    return doneButton
}

const createDeleteButton = (todo) => {
    const deleteButton = document.createElement("button")
    deleteButton.textContent = "X"
    deleteButton.classList.add("btn", "btn-danger", "btn-sm")

    deleteButton.addEventListener("click", () => {
        todo.remove()
    })

    return deleteButton
}

const createButtonWrapper = () => {
    const buttonWrapper = document.createElement("div")
    buttonWrapper.classList.add("d-flex", "gap-2")

    return buttonWrapper
}

const createTodoElement = (text) => {
    const todo = createTodo(text)

    const buttonWrapper = createButtonWrapper()

    const doneButton = createDoneButton(todo)
    const deleteButton = createDeleteButton(todo)

    buttonWrapper.appendChild(doneButton)
    buttonWrapper.appendChild(deleteButton)
    todo.appendChild(buttonWrapper)

    return todo
}

todoForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const text = todoInput.value

    const todoElement = createTodoElement(text)

    todoList.appendChild(todoElement)

    todoInput.value = ""
    todoInput.focus()
})

/* 
? event.preventDefault() 

Ett formulär försöker som standard skicka data och ladda om sidan.
Eftersom vi vill hantera formuläret själva med JavaScript
stoppar vi det vanliga beteendet med preventDefault().
Annars hinner sidan laddas om innan vi kan jobba vidare med värdet.
*/