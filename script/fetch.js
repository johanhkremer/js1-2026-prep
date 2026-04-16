/*
fetch används för att hämta data från en server eller ett API.

Så här fungerar det steg för steg:

1. fetch(url)
   - skickar iväg en förfrågan till den adress du anger
   - det sker asynkront, alltså i bakgrunden
   - därför får vi tillbaka ett Promise

2. await fetch(url)
   - await väntar tills servern har svarat
   - svaret sparas ofta i en variabel, t.ex. response

3. response
   - innehåller information om svaret, t.ex.:
     - status: om anropet lyckades
     - ok: true eller false
     - headers
   - själva datan är ofta inte direkt färdig att använda ännu

4. await response.json()
   - om svaret är JSON omvandlas det till vanlig JavaScript-data
   - till exempel en array eller ett objekt
   - först nu kan vi använda datan i vår kod

Exempel:
const response = await fetch("https://api.example.com/users")
const data = await response.json()

Viktigt att tänka på:
- fetch ger inte automatiskt fel bara för att status är 404 eller 500
- därför kontrollerar man ofta:
  if (!response.ok) {
    throw new Error("Något gick fel")
  }

Kort sagt:
fetch = be om data
response = serverns svar
response.json() = gör om svaret till användbar JavaScript-data
*/

const characherForm = document.getElementById("characterForm")
const characterIdInput = document.getElementById("characterIdInput")
const characterCard = document.getElementById("characterCard")

const getRickAndMortyCharacter = async (id) => {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)

        console.log(response)

        if (!response.ok) {
            throw new Error("Karaktären kunde inte hittas")
        }

        const data = await response.json()

        console.log(data)

        renderCharacterCard(data)

    } catch (error) {
        console.log(error)
        renderError(error.message)
    }
}

const renderCharacterCard = (character) => {
    const cardTitle = document.createElement("h2")
    const characterImg = document.createElement("img")

    cardTitle.textContent = character.name
    characterImg.src = character.image

    characterCard.appendChild(cardTitle)
    characterCard.appendChild(characterImg)
}

renderError = (error) => {
    const errorMessage = document.createElement("p")

    errorMessage.textContent = error

    characterCard.appendChild(errorMessage)
}

characherForm.addEventListener("submit", (event) => {
    event.preventDefault()

    characterCard.innerHTML = ""

    const id = characterIdInput.value

    getRickAndMortyCharacter(id)
})