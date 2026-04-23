import { OPEN_WEATHER_API_KEY } from "./config.js"

const cityForm = document.getElementById("cityForm")
const cityInput = document.getElementById("cityInput")
const currentWeatherContainer = document.getElementById("currentWeatherContainer")
const forecastContainer = document.getElementById("forecastContainer")
const LAST_SEARCHED_CITY_KEY = "lastSearchedCity"

const saveLastSearchedCity = (city) => {
    try {
        localStorage.setItem(LAST_SEARCHED_CITY_KEY, city)
    } catch (error) {
        console.log("Kunde inte spara senaste stad i localStorage", error)
    }
}

const getLastSearchedCity = () => {
    try {
        return localStorage.getItem(LAST_SEARCHED_CITY_KEY)
    } catch (error) {
        console.log("Kunde inte läsa senaste stad från localStorage", error)
        return null
    }
}

const getCurrentWeather = async (lat, lon) => {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=metric&lang=sv`
    )

    if (!response.ok) {
        throw new Error("Kunde inte hämta dagens väderdata")
    }

    const data = await response.json()

    return data
}

const getForecastData = async (lat, lon) => {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=metric&lang=sv`
    )

    if (!response.ok) {
        throw new Error("Kunde inte hämta väderprognosdata")
    }

    const data = await response.json()

    return data
}

const getCoordinates = async (place) => {
    const query = encodeURIComponent(`${place},SE`)

    const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=${OPEN_WEATHER_API_KEY}`
    )

    if (!response.ok) {
        throw new Error("Kunde inte hämta koordinater")
    }

    const data = await response.json()

    return data
}

const renderLoadState = (container, message) => {
    container.innerHTML = `<p>${message}</p>`
}

const renderErrorState = (container, error) => {
    container.innerHTML = `
        <h2>Något gick fel</h2>
        <p>${error.message}</p>
    `
}

const renderCurrentWeatherCard = async (lat, lon) => {
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

const renderForecast = async (lat, lon) => {
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
