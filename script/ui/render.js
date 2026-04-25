import { getCurrentWeather } from "../services/weatherService.js"
import { getForecastData } from "../services/weatherService.js"

const currentWeatherContainer = document.getElementById("currentWeatherContainer")
const forecastContainer = document.getElementById("forecastContainer")

export const renderLoadState = (container, message) => {
    container.innerHTML = `<p>${message}</p>`
}

export const renderErrorState = (container, error) => {
    container.innerHTML = `
        <div class="errorMessage">
            <h2>Något gick fel</h2>
            <p>${error.message}</p>
        </div>
    `
}

export const renderCurrentWeatherCard = async (lat, lon) => {
    try {
        renderLoadState(currentWeatherContainer, "Laddar dagens väder...")

        const cityCurrentWeather = await getCurrentWeather(lat, lon)

        currentWeatherContainer.innerHTML = `
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
                    <p>Känns som: ${Math.round(cityCurrentWeather.main.feels_like)}°C</p>
                    <p>Väder: ${cityCurrentWeather.weather[0].description}</p>
                    <p>Luftfuktighet: ${cityCurrentWeather.main.humidity}%</p>
                    <p>Vind: ${cityCurrentWeather.wind.speed} m/s</p>
                </div>
            </article>
        `
    } catch (error) {
        console.log("Something went wrong", error)
        renderErrorState(currentWeatherContainer, error)
    }
}

export const renderForecast = async (lat, lon) => {
    try {
        renderLoadState(forecastContainer, "Laddar prognos...")

        const cityForecast = await getForecastData(lat, lon)

        const dailyForecasts = cityForecast.list.filter((forecast) => {
            return forecast.dt_txt.includes("12:00:00")
        })

        const forecastCards = dailyForecasts.map((forecastCard) => {
            const date = forecastCard.dt_txt.split(" ")[0]

            return `
                <article class="forecastCard">
                    <h3>${date}</h3>
                    <img
                        src="https://openweathermap.org/img/wn/${forecastCard.weather[0].icon}@2x.png"
                        alt="${forecastCard.weather[0].description}"
                    >
                    <p>Temperatur: ${Math.round(forecastCard.main.temp)}°C</p>
                    <p>Väder: ${forecastCard.weather[0].description}</p>
                </article>
            `
        }).join("")

        forecastContainer.innerHTML = forecastCards
    } catch (error) {
        console.log("Something went wrong", error)
        renderErrorState(forecastContainer, error)
    }
}
