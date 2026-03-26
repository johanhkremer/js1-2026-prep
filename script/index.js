const todoForm = document.getElementById("todoForm")
const todoInput = document.getElementById("todoInput")
const todoHelp = document.getElementById("todoHelp")
const todoList = document.getElementById("todoList")

todoForm.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log(todoInput.value)

    if (todoInput.value.length < 2) {
        console.log("todo to short!")
        todoHelp.textContent = "Todo must be at least 2 chars"
        todoHelp.classList.add("text-danger")

    } else {
        /* Reset error-message */
        todoHelp.textContent = "Input your todo in the text area"
        todoHelp.classList.remove("text-danger")

        /* <li> */
        const todoLi = document.createElement("li")
        todoLi.classList.add("list-group-item", "p-3", "mt-3", "d-flex", "justify-content-between", "align-items-center")

        /* todo text */
        const todoText = document.createElement("span")
        todoText.textContent = todoInput.value
        todoLi.appendChild(todoText)

        /* buttonwrapper */
        const buttonWrapper = document.createElement("div")
        buttonWrapper.classList.add("d-flex", "gap-2")

        /* Done button */
        const doneButton = document.createElement("button")
        buttonWrapper.appendChild(doneButton)
        doneButton.textContent = "Done"
        doneButton.classList.add("btn", "btn-success", "btn-sm")

        doneButton.addEventListener("click", () => {
            todoLi.classList.toggle("bg-success-subtle")
            todoText.classList.toggle("text-decoration-line-through")
            todoText.classList.toggle("text-muted")
        })

        /* Delete button */
        const deleteButton = document.createElement("button")
        buttonWrapper.appendChild(deleteButton)
        deleteButton.textContent = "X"
        deleteButton.classList.add("btn", "btn-danger", "btn-sm")

        deleteButton.addEventListener("click", () => {
            todoLi.remove()
        })

        /* Add buttonwrapper to li */
        todoLi.appendChild(buttonWrapper)

        /* Add li to ul */
        todoList.appendChild(todoLi)

        /* clear input value and set fokus to input field*/
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