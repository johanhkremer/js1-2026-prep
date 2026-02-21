// Object = nyckel: värde

const name = "Rick Sanchez"
const age = 70
const email = "rick.sanchez@portalmail.com"
const dimension = "C-137"

/* ---------------------------------------- */

const character = {
    name: "Rick Sanchez",
    age: 70,
    email: "rick.sanchez@portalmail.com",
    dimension: "C-137"
}

console.log(character)

/* ---------------------------------------- */

let characters = [
    {
        id: 1,
        name: "Rick Sanchez",
        age: 70,
        email: "rick.sanchez@portalmail.com",
        street: "Garage Lab 1",
        city: "Seattle",
        zip: "98101",
        dimension: "C-137"
    },
    {
        id: 2,
        name: "Morty Smith",
        age: 14,
        email: "morty.smith@schoolmail.com",
        street: "Suburb Street 42",
        city: "Seattle",
        zip: "98102",
        dimension: "C-137"
    },
    {
        id: 3,
        name: "Summer Smith",
        age: 17,
        email: "summer.smith@schoolmail.com",
        street: "Suburb Street 42",
        city: "Seattle",
        zip: "98102",
        dimension: "C-137"
    },
    {
        id: 4,
        name: "Beth Smith",
        age: 35,
        email: "beth.smith@vetmail.com",
        street: "Suburb Street 42",
        city: "Seattle",
        zip: "98102",
        dimension: "C-137"
    },
    {
        id: 5,
        name: "Jerry Smith",
        age: 38,
        email: "jerry.smith@workmail.com",
        street: "Suburb Street 42",
        city: "Seattle",
        zip: "98102",
        dimension: "C-137"
    },
    {
        id: 6,
        name: "Evil Morty",
        age: 14,
        email: "evil.morty@citadel.gov",
        street: "Citadel Central Tower",
        city: "Citadel of Ricks",
        zip: "CITADEL-001",
        dimension: "Unknown"
    },
    {
        id: 7,
        name: "Birdperson",
        age: 45,
        email: "birdperson@resistance.net",
        street: "Rebel Base Alpha",
        city: "Bird World",
        zip: "BW-909",
        dimension: "Bird World"
    },
    {
        id: 8,
        name: "Tammy Guetermann",
        age: 22,
        email: "tammy@galacticfederation.gov",
        street: "Federation HQ",
        city: "New Galactic Order",
        zip: "GF-777",
        dimension: "Federation Prime"
    }
]

console.log(characters.map((character) => character.name))

console.log(characters.map((character) => { return character.email }))

console.log(characters.filter((character) => character.dimension !== "C-137"))

console.log("Antal karaktärer: ", characters.length)

characters.push(
    {
        id: 9,
        name: "Mr. Meeseeks",
        age: 1,
        email: "existence.is.pain@meeseeksbox.io",
        street: "Meeseeks Box",
        city: "Unknown",
        zip: "00001",
        dimension: "Meeseeks Realm"
    })
console.log("Add one character")
console.log("Antal karaktärer: ", characters.length)
console.log(characters)


/* ---------------------------------------- */

const charactersDetailed = [
    {
        id: 1,
        name: "Rick Sanchez",
        age: 70,
        email: "rick.sanchez@citadel.space",
        isScientist: true,
        address: {
            street: "Earth C-137 Garage Lab",
            city: "Dimension C-137",
            zip: "C137-001"
        }
    },
    {
        id: 2,
        name: "Morty Smith",
        age: 14,
        email: "morty.smith@earthschool.com",
        isScientist: false,
        address: {
            street: "Haunted House Suburb 42",
            city: "Dimension C-137",
            zip: "C137-042"
        }
    },
    {
        id: 3,
        name: "Summer Smith",
        age: 17,
        email: "summer.smith@earthschool.com",
        isScientist: false,
        address: {
            street: "Haunted House Suburb 42",
            city: "Dimension C-137",
            zip: "C137-042"
        }
    },
    {
        id: 4,
        name: "Beth Smith",
        age: 35,
        email: "beth.smith@galacticvet.com",
        isScientist: false,
        address: {
            street: "Haunted House Suburb 42",
            city: "Dimension C-137",
            zip: "C137-042"
        }
    },
    {
        id: 5,
        name: "Jerry Smith",
        age: 38,
        email: "jerry.smith@interdimensional.marketing",
        isScientist: false,
        address: {
            street: "Haunted House Suburb 42",
            city: "Dimension C-137",
            zip: "C137-042"
        }
    }
]

//Template string
console.log(charactersDetailed.map((character) => {
    return `${character.name} lives on street ${character.address.street}`
}))

console.log(charactersDetailed.filter(character => character.isScientist === true))