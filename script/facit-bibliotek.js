const books = [
    { title: "Dune", author: "Frank Herbert", available: true, genre: "Sci-Fi" },
    { title: "1984", author: "George Orwell", available: false, genre: "Dystopi" },
    { title: "Foundation", author: "Isaac Asimov", available: true, genre: "Sci-Fi" },
    { title: "The Hobbit", author: "J.R.R. Tolkien", available: true, genre: "Fantasy" },
    { title: "Brave New World", author: "Aldous Huxley", available: false, genre: "Dystopi" },
    { title: "Neuromancer", author: "William Gibson", available: true, genre: "Sci-Fi" }
]

// Loopa igenom alla böcker
for (let i = 0; i < books.length; i++) {
    let book = books[i]

    // Om boken inte är tillgänglig, hoppa över resten av detta varv
    if (book.available === false) {
        continue
    }

    // Om boken är fantasy
    if (book.genre === "Fantasy") {
        console.log("Fantasybok hittad: " + book.title)

        // Loopa igenom alla egenskaper i objektet
        for (let key in book) {
            console.log(key + " " + book[key])
        }

        // Avsluta hela loopen
        break
    }

    // Alla andra tillgängliga böcker
    console.log("Tillgänglig bok: " + book.title)
}