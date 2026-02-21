// 🧪 Avslutande uppgift – “Loot Filter” (enkelt format)

// Du har en lista med loot. Varje item är en sträng och börjar med en rarity-tag:

// [C] = common

// [R] = rare

// [E] = epic

// const loot = [
//     "[C] Iron Sword",
//     "[C] Health Potion",
//     "[R] Shadow Dagger",
//     "[E] Dragon Helm",
//     "[C] Mana Potion",
//     "[E] Frost Staff",
//     "[C] Leather Boots",
//     "[R] Titan Shield",
//     "[E] Phoenix Feather",
//     "[R] Silver Ring",

//     "[C] Wooden Shield",
//     "[R] Crimson Blade",
//     "[E] Stormbreaker Axe",
//     "[C] Stamina Potion",
//     "[R] Obsidian Armor",
//     "[E] Celestial Bow",
//     "[C] Cloth Gloves",
//     "[R] Emerald Amulet",
//     "[E] Void Staff",
//     "[C] Minor Healing Potion"
// ]
// 🎯 Målet

// Skapa en ny lista i console som bara visar “bra loot” och formaterar den snyggt.

// ✅ Del 1 – Filter: bara Rare och Epic

// Filtrera fram bara items som är [R] eller [E].

// Tips: .startsWith("[R]") och .startsWith("[E]")

// ✅ Del 2 – Filter: bara “gear”

// Filtrera bort potions.

// Ett item räknas som potion om det innehåller ordet "Potion".

// Tips: !item.includes("Potion")

// ✅ Del 3 – Map: gör texten snygg

// Omvandla listan så att varje item får formatet:

// [R] Shadow Dagger → RARE: Shadow Dagger

// [E] Frost Staff → EPIC: Frost Staff

// Tips: Du kan använda replace() för att byta taggarna:

// item.replace("[R] ", "RARE: ")

// item.replace("[E] ", "EPIC: ")

// ✅ Del 4 – Map: lägg på en “🔥”-ikon på Epic

// Alla “EPIC”-items ska få en ikon i slutet:

// EPIC: Frost Staff 🔥

// 🔎 Krav

// Du ska använda filter() och map()

// Du får inte ändra loot-arrayen

// Skriv ut resultat efter varje steg med console.log

// ⭐ Extra (om de hinner)

// Skapa en variabel:

// const search = "Shield"

// Filtrera slutresultatet så att bara items som innehåller search visas.

const loot = [
    "[C] Iron Sword",
    "[C] Health Potion",
    "[R] Shadow Dagger",
    "[E] Dragon Helm",
    "[C] Mana Potion",
    "[E] Frost Staff",
    "[C] Leather Boots",
    "[R] Titan Shield",
    "[E] Phoenix Feather",
    "[R] Silver Ring"
]

// Steg 1 – Filter: bara Rare och Epic
const rareAndEpic = loot.filter(
    (item) => item.startsWith("[R]") || item.startsWith("[E]")
)
console.log("Steg 1 - Rare & Epic:", rareAndEpic)

// Steg 2 – Filter: ta bort potions
const noPotions = rareAndEpic.filter((item) => !item.includes("Potion"))
console.log("Steg 2 - Utan potions:", noPotions)

// Steg 3 – Map: gör texten snygg
const formatted = noPotions.map((item) =>
    item
        .replace("[R] ", "RARE: ")
        .replace("[E] ", "EPIC: ")
)
console.log("Steg 3 - Formaterat:", formatted)

// Steg 4 – Map: lägg på 🔥 på Epic
const finalList = formatted.map((item) =>
    item.startsWith("EPIC:") ? `${item} 🔥` : item
)
console.log("Steg 4 - Slutresultat:", finalList)

// (Extra) Sökfilter
const search = "Shield"
const searched = finalList.filter((item) => item.includes(search))
console.log("Extra - Sök:", searched)

// Visa att originalet inte ändrats
console.log("Original loot:", loot)