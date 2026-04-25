import { saveLastSearchedCity } from "./storage/localStorageService.js"
import { getLastSearchedCity } from "./storage/localStorageService.js"
import { getCoordinates } from "./services/weatherService.js"
import { renderCurrentWeatherCard } from "./ui/render.js"
import { renderForecast } from "./ui/render.js"
import { renderLoadState } from "./ui/render.js"
import { renderErrorState } from "./ui/render.js"

const cityForm = document.getElementById("cityForm")
const cityInput = document.getElementById("cityInput")
export const LAST_SEARCHED_CITY_KEY = "lastSearchedCity"

const renderApp = async (city) => {
    try {
        const [location] = await getCoordinates(city)

        if (!location) {
            throw new Error("Kunde inte hitta staden")
        }

        const { lat, lon } = location
        saveLastSearchedCity(city)

        renderCurrentWeatherCard(lat, lon)
        renderForecast(lat, lon)
    } catch (error) {
        renderErrorState(currentWeatherContainer, error)
        renderErrorState(forecastContainer, error)
    }
}

cityForm.addEventListener("submit", (event) => {
    event.preventDefault()

    currentWeatherContainer.innerHTML = ""
    forecastContainer.innerHTML = ""

    const city = cityInput.value.trim()

    if (!city) {
        renderErrorState(currentWeatherContainer, { message: "Skriv in en stad." })
        return
    }

    renderApp(city)
})

const lastSearchedCity = getLastSearchedCity()

if (lastSearchedCity) {
    cityInput.value = lastSearchedCity
    renderApp(lastSearchedCity)
}
