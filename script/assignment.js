// 1. Filmlista
// Som användare vill jag kunna lägga till en ny film i min filmlista. - Skapa en array med filmer - Lägg
// till en ny film sist i listan - Skriv ut listan och hur många filmer den innehåller

const movies = [
    "Arrival (2016)",
    "Ex Machina (2014)",
    "Blade Runner 2049 (2017)",
    "Interstellar (2014)",
    "Annihilation (2018)",
    "Children of Men (2006)",
    "Moon (2009)",
    "Under the Skin (2013)",
    "Upgrade (2018)",
    "Her (2013)",
    "Edge of Tomorrow (2014)",
    "The Martian (2015)",
    "Dune (2021)",
    "Oblivion (2013)",
    "District 9 (2009)",
    "Solaris (1972)",
    "Stalker (1979)",
    "Contact (1997)",
    "Primer (2004)"
]

movies.push("Coherence (2013)")

console.log("Movies", movies, "Number of movies:", movies.length)

// Studenter:
const students = [
    { id: 1, name: "Alice", age: 23, active: true, course: "JavaScript" },
    { id: 2, name: "Bob", age: 19, active: false, course: "HTML/CSS" },
    { id: 3, name: "Charlie", age: 25, active: true, course: "JavaScript" },
    { id: 4, name: "Diana", age: 28, active: true, course: "React" },
    { id: 5, name: "Elias", age: 17, active: false, course: "HTML/CSS" },
    { id: 6, name: "Fatima", age: 22, active: true, course: "JavaScript" },
    { id: 7, name: "Gabriel", age: 31, active: true, course: "React" },
    { id: 8, name: "Hanna", age: 20, active: false, course: "UX/UI" }
]

// 1. Aktiva studenter
// Filtrera ut alla studenter som är aktiva.

const activeStudents = students.filter(student => student.active === true)

console.log(activeStudents)