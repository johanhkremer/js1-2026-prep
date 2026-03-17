const students = [
    "Abdala Ali",
    "Albin Dyrenäs",
    "Alice Danielsson",
    "Alicia Holm",
    "Andreas Henker",
    "Apelsina Ögren",
    "Ashley Heather",
    "Catherine Crépault Wibe",
    "Diana Paragina",
    "Disa Johansson",
    "Dzemila Beslija",
    "Fatima Kanbar",
    "Felix Hansson",
    "Filip Norrman",
    "Isa Forsberg",
    "Jeongsook Park",
    "Johan Gustafsson",
    "Kevin Dalström",
    "Kiarman Taklif",
    "Kim Rundgren",
    "Molly Dahl Lundell",
    "Oliver Hedell",
    "Oskar Calais",
    "Setareh Adabi",
    "Tatiana Uzan",
    "Therese Jonsson",
    "Yvonne Claassen",
    "Zana Ibrahim"
]

// Blanda listan
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1))

        /*
            Math.floor() används för att avrunda ner ett tal till närmaste heltal
            Math.random() används för att skapa ett slumptal mellan 0 och 1
        */

        let temp = array[i]
        array[i] = array[randomIndex]
        array[randomIndex] = temp
    }

    return array
}

// Skapa grupper
function createGroups(array, groupSize) {
    let groups = []
    let currentGroup = []

    for (let i = 0; i < array.length; i++) {
        currentGroup.push(array[i])

        if (currentGroup.length === groupSize) {
            groups.push(currentGroup)
            currentGroup = []
        }
    }

    if (currentGroup.length > 0) {
        groups.push(currentGroup)
    }

    return groups
}

// Skriv ut grupper
function printGroups(groups) {
    for (let i = 0; i < groups.length; i++) {
        console.log("Grupp " + (i + 1) + ":")

        for (let j = 0; j < groups[i].length; j++) {
            console.log("- " + groups[i][j])
        }

        console.log(" ")
    }
}

// Kör programmet
shuffle(students)

let groups = createGroups(students, 3)

printGroups(groups)