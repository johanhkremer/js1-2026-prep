import { saveLastSearchedCity } from "./storage/localStorageService.js"
import { getLastSearchedCity } from "./storage/localStorageService.js"
import { getCoordinates } from "./services/weatherService.js"
import { renderCurrentWeatherCard } from "./ui/homeView.js"
import { renderErrorState } from "./ui/shared.js"

const cityForm = document.getElementById("cityForm") as HTMLFormElement
const cityInput = document.getElementById("cityInput") as HTMLInputElement
const currentWeatherContainer = document.getElementById("currentWeatherContainer") as HTMLElement


const loadHomePage = async (city: string) => {
    try {
        const [location] = await getCoordinates(city)

        if (!location) {
            throw new Error("Kunde inte hitta staden")
        }

        const { lat, lon } = location

        saveLastSearchedCity(city)

        renderCurrentWeatherCard({ lat, lon })
    } catch (error: unknown) {
        renderErrorState(currentWeatherContainer, error)
    }
}

if (!cityForm || !cityInput || !currentWeatherContainer) {
    throw new Error("Kunde inte hitta nödvändiga HTML-element")
}

cityForm.addEventListener("submit", (event: SubmitEvent) => {
    event.preventDefault()

    currentWeatherContainer.innerHTML = ""

    const city = cityInput.value.trim()

    if (!city) {
        renderErrorState(currentWeatherContainer, new Error("Skriv in en stad."))
        return
    }

    loadHomePage(city)
})

const lastSearchedCity = getLastSearchedCity()

if (lastSearchedCity) {
    cityInput.value = lastSearchedCity
    loadHomePage(lastSearchedCity)
}
