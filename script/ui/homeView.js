import { getCurrentWeather } from "../services/weatherService.js"
import { renderErrorState, renderLoadState } from "./shared.js"

const currentWeatherContainer = document.getElementById("currentWeatherContainer")

export const renderCurrentWeatherCard = async (lat, lon) => {
    try {
        renderLoadState(currentWeatherContainer, "Laddar dagens väder...")

        const cityCurrentWeather = await getCurrentWeather(lat, lon)

        currentWeatherContainer.innerHTML = `
        <a href="detailPage.html?code=${encodeURIComponent(cityCurrentWeather.name)}">
            <article class="weatherCard">
                <div class="weatherCardTop">
                    <h2>${cityCurrentWeather.name}</h2>
                    <img 
                        src="https://openweathermap.org/img/wn/${cityCurrentWeather.weather[0].icon}@2x.png"
                        alt="${cityCurrentWeather.weather[0].description}"
                    >
                </div>

                <div class="weatherCardBottom">
                    <p>Temperatur: ${Math.round(cityCurrentWeather.main.temp)}°C</p>
                    <p>Väder: ${cityCurrentWeather.weather[0].description}</p>
                    <p>Visa detaljer</p>
                </div>
            </article>
        </a>
        `
    } catch (error) {
        console.log("Something went wrong", error)
        renderErrorState(currentWeatherContainer, error)
    }
}
