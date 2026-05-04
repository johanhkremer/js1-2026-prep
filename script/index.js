import { saveLastSearchedCity } from "./storage/localStorageService.js"
import { getLastSearchedCity } from "./storage/localStorageService.js"
import { getCoordinates } from "./services/weatherService.js"
import { renderCurrentWeatherCard } from "./ui/homeView.js"
import { renderErrorState } from "./ui/shared.js"

const cityForm = document.getElementById("cityForm")
const cityInput = document.getElementById("cityInput")
const currentWeatherContainer = document.getElementById("currentWeatherContainer")

const loadHomePage = async (city) => {
    try {
        const [location] = await getCoordinates(city)

        if (!location) {
            throw new Error("Kunde inte hitta staden")
        }

        const { lat, lon } = location

        saveLastSearchedCity(city)

        renderCurrentWeatherCard(lat, lon)
    } catch (error) {
        renderErrorState(currentWeatherContainer, error)
    }
}

cityForm.addEventListener("submit", (event) => {
    event.preventDefault()

    currentWeatherContainer.innerHTML = ""

    const city = cityInput.value.trim()

    if (!city) {
        renderErrorState(currentWeatherContainer, { message: "Skriv in en stad." })
        return
    }

    loadHomePage(city)
})

const lastSearchedCity = getLastSearchedCity()

if (lastSearchedCity) {
    cityInput.value = lastSearchedCity
    loadHomePage(lastSearchedCity)
}
