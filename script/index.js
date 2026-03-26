const todoForm = document.getElementById("todoForm")
const todoInput = document.getElementById("todoInput")
const todoHelp = document.getElementById("todoHelp")
const todoList = document.getElementById("todoList")
const todo = document.querySelectorAll("li")


todoForm.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log(todoInput.value)

    if (todoInput.value.length < 2) {
        console.log("todo to short!")
        todoHelp.textContent = "Todo must be at least 2 chars"
        todoHelp.classList.add("text-danger")

    } else {
        todoHelp.textContent = "Input your todo in the text area"
        todoHelp.classList.remove("text-danger")

        const todoLi = document.createElement("li")
        todoLi.textContent = todoInput.value
        todoLi.classList.add("card", "p-3", "mt-3", "d-flex", "justify-content-between", "align-items-center", "flex-row")

        const buttonWrapper = document.createElement("div")
        buttonWrapper.classList.add("d-flex", "gap-2")

        const doneButton = document.createElement("button")
        buttonWrapper.appendChild(doneButton)
        doneButton.textContent = "Done"
        doneButton.classList.add("btn", "btn-success", "btn-sm")

        doneButton.addEventListener("click", () => {
            todoLi.classList.toggle("bg-success-subtle")
            todoLi.classList.toggle("text-decoration-line-through")
            todoLi.classList.toggle("text-muted")
        })

        const deleteButton = document.createElement("button")
        buttonWrapper.appendChild(deleteButton)
        deleteButton.textContent = "X"
        deleteButton.classList.add("btn", "btn-danger", "btn-sm")

        deleteButton.addEventListener("click", () => {
            todoLi.remove()
        })

        todoList.appendChild(todoLi)
        todoLi.appendChild(buttonWrapper)

        todoInput.value = ""
        todoInput.focus()
    }
})

/* 
? event.preventDefault() 

Ett formulär försöker som standard skicka data och ladda om sidan.
Eftersom vi vill hantera formuläret själva med JavaScript
stoppar vi det vanliga beteendet med preventDefault().
Annars hinner sidan laddas om innan vi kan jobba vidare med värdet.
*/