import { saveLastSearchedCity } from "./storage/localStorageService.js"
import { getLastSearchedCity } from "./storage/localStorageService.js"
import { getCoordinates } from "./services/weatherService.js"
import { renderCurrentWeatherCard } from "./ui/render.js"
import { renderForecast } from "./ui/render.js"

const cityForm = document.getElementById("cityForm")
const cityInput = document.getElementById("cityInput")
const currentWeatherContainer = document.getElementById("currentWeatherContainer")
const forecastContainer = document.getElementById("forecastContainer")
export const LAST_SEARCHED_CITY_KEY = "lastSearchedCity"

export const renderLoadState = (container, message) => {
    container.innerHTML = `<p>${message}</p>`
}

export const renderErrorState = (container, error) => {
    container.innerHTML = `
        <h2>Något gick fel</h2>
        <p>${error.message}</p>
    `
}

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
