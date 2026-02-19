// 🧪 Miniuppgift – Inköpslistan

// Du har en inköpslista:

// let shoppingList = ["Milk", "Bread", "Eggs", "Pasta", "Tomatoes"]

// Koden ska kunna:
// 1) Lägga till en vara

// Skriv en funktion som tar emot ett namn och lägger till det i listan.
// Efteråt ska den skriva ut:

// listan

// nya längden

// 2) Ta bort en vara (om den finns)

// Skriv en funktion som tar emot ett namn och:

// om varan finns → ta bort den och skriv ut “Tog bort …”

// annars → skriv ut “Finns inte …”

// 3) Skriv ut listan snyggt

// Skriv en funktion som skriver ut hela listan som en sträng (med join), t.ex:

// Milk 🛒 Bread 🛒 Eggs ...

// Krav

// Använd funktioner

// Använd minst 3 arraymetoder totalt (t.ex. push, includes, indexOf, splice, join, length)

// Miniuppgift – Lösning (Inköpslistan)

let shoppingList = ["Milk", "Bread", "Eggs", "Pasta", "Tomatoes"]

const addItem = (item) => {
    shoppingList.push(item)
    console.log("✅ Tillagd:", item)
    console.log("🛒 Lista:", shoppingList)
    console.log("📏 Antal:", shoppingList.length)
}

const removeItem = (item) => {
    const index = shoppingList.indexOf(item)

    index !== -1
        ? (shoppingList.splice(index, 1), console.log("🗑️ Tog bort:", item))
        : console.log("❌ Finns inte:", item)

    console.log("🛒 Lista:", shoppingList)
}

const printList = () => {
    console.log("🛒", shoppingList.join(" 🛒 "))
}

// Testkörning
printList()
addItem("Cheese")
removeItem("Eggs")
removeItem("Coffee")
printList()
