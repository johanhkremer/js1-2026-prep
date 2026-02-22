const title = document.querySelector("#title")
const changeTextBtn = document.querySelector("#changeTextBtn")
const addItemBtn = document.querySelector("#addItemBtn")
const list = document.querySelector("#list")

title.textContent = "DOM är coolt 😎"

changeTextBtn.addEventListener("click", () => {
    title.textContent = "Texten ändrades!"

    title.classList.toggle("green")
})

addItemBtn.addEventListener("click", () => {
    const newItem = document.createElement("li")
    newItem.textContent = "Ny punkt!"
    list.appendChild(newItem)
})