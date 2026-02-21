// 🛸 Avslutande uppgift – “Portal Pass Control” (Objects)

// Story: Citadel of Ricks har ett problem: fel personer slinker igenom portaler. Du ska bygga ett litet “kontrollsystem” som jobbar med karaktär-objekt.

// ✅ Startkod (klistra in)
// const portalPasses = [
//   {
//     id: 1,
//     name: "Rick Sanchez",
//     species: "Human",
//     dimension: "C-137",
//     clearance: 5,
//     isWanted: false,
//     inventory: { portalGun: true, meeseeksBox: true, crystals: 3 },
//     address: { street: "Garage Lab 1", city: "Seattle", zip: "98101" }
//   },
//   {
//     id: 2,
//     name: "Morty Smith",
//     species: "Human",
//     dimension: "C-137",
//     clearance: 1,
//     isWanted: false,
//     inventory: { portalGun: false, meeseeksBox: false, crystals: 0 },
//     address: { street: "Suburb Street 42", city: "Seattle", zip: "98102" }
//   },
//   {
//     id: 3,
//     name: "Summer Smith",
//     species: "Human",
//     dimension: "C-137",
//     clearance: 2,
//     isWanted: false,
//     inventory: { portalGun: false, meeseeksBox: false, crystals: 1 },
//     address: { street: "Suburb Street 42", city: "Seattle", zip: "98102" }
//   },
//   {
//     id: 4,
//     name: "Birdperson",
//     species: "Bird-Person",
//     dimension: "Bird World",
//     clearance: 4,
//     isWanted: false,
//     inventory: { portalGun: false, meeseeksBox: false, crystals: 2 },
//     address: { street: "Rebel Base Alpha", city: "Bird World", zip: "BW-909" }
//   },
//   {
//     id: 5,
//     name: "Evil Morty",
//     species: "Human",
//     dimension: "Unknown",
//     clearance: 5,
//     isWanted: true,
//     inventory: { portalGun: true, meeseeksBox: false, crystals: 9 },
//     address: { street: "Citadel Central Tower", city: "Citadel of Ricks", zip: "CITADEL-001" }
//   }
// ]
// 🎯 Målet

// Skapa “godkända resenärer” och skriv ut resultatet efter varje steg.

// Regel: Du får inte ändra original-arrayen portalPasses.

// ✅ Del 1 – Map: gör en snabb “namnlista”

// Skapa en ny lista som bara innehåller:

// name

// dimension

// Format:

// Rick Sanchez (C-137)

// Tips: template string + map().

// ✅ Del 2 – Filter: stoppa efterlysta

// Filtrera fram alla som är isWanted: true.

// Skriv ut:

// antal efterlysta

// deras namn

// ✅ Del 3 – Filter: vilka får gå igenom portalen?

// En karaktär är “godkänd” om:

// clearance >= 3

// inventory.portalGun === true

// isWanted === false

// Skriv ut “Approved list”.

// ✅ Del 4 – Map: skapa “passerkort” (nested + format)

// Omvandla Approved list till objekt med format:

// {
//   id: 1,
//   badge: "✅ Rick Sanchez | CL:5 | Seattle (98101)",
//   crystals: 3
// }

// badge ska använda address.city och address.zip

// crystals ska komma från inventory.crystals

// ✅ Del 5 – Find + Update: beslagta portal gun

// Hitta “Morty Smith” med find().

// Skapa en ny version av Morty (nytt objekt) där:

// inventory.portalGun blir true

// inventory.crystals ökar med +1

// Skriv ut:

// gamla Morty (oförändrad)

// nya Morty (uppdaterad)

// Tips: spread ... för både character och inventory.

// ⭐ Extra (om de hinner) – “Sök i staden”

// Skapa:

// const searchCity = "Seattle"

// Filtrera fram alla som bor i address.city === searchCity och skriv ut deras name.

// 🔎 Krav (som du kan läsa upp högt)

// Du måste använda map, filter, find

// Du måste använda dot-notation (character.address.city)

// Du får inte mutera portalPasses