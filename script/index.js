import { OPEN_WEATHER_API_KEY } from "./config.js"

const cityForm = document.getElementById("cityForm")
const cityInput = document.getElementById("cityInput")
const currentWeatherCard = document.getElementById("currentWeatherCard")
const forecastContainer = document.getElementById("forecastContainer")

const getCurrentWeather = async (place) => {
    const [location] = await getCoordinates(place)

    if (!location) {
        throw new Error("Kunde inte hitta staden")
    }

    const { lat, lon } = location

    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=metric&lang=sv`
    )

    if (!response.ok) {
        throw new Error("Kunde inte hämta dagens väderdata")
    }

    const data = await response.json()

    return data
}

const getForcastData = async (place) => {
    const [location] = await getCoordinates(place)

    if (!location) {
        throw new Error("Kunde inte hitta staden")
    }

    const { lat, lon } = location

    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=metric&lang=sv`)

    if (!response.ok) {
        throw new Error("Kunde inte hämta väderprognosdata")
    }

    const data = await response.json()

    return data
}

const getCoordinates = async (place) => {

    /* 
    Hela världen
    `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(place)}&limit=5&appid=${OPEN_WEATHER_API_KEY}`
    
    Bara Sverige
    `https://api.openweathermap.org/geo/1.0/direct?q=${place},SE&limit=1&appid=${OPEN_WEATHER_API_KEY}`
    */

    const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${place},SE&limit=1&appid=${OPEN_WEATHER_API_KEY}`)

    if (!response.ok) {
        throw new Error("Kunde inte hämta koordinater")
    }

    const data = await response.json()

    return data
}

const renderCurrentWeatherCard = async (city) => {
    try {
        const cityCurrentWeather = await getCurrentWeather(city)

        console.log(cityCurrentWeather)

        currentWeatherCard.innerHTML = `
        <h2>${cityCurrentWeather.name}</h2>
        <img 
            src="https://openweathermap.org/img/wn/${cityCurrentWeather.weather[0].icon}@2x.png"
            alt="${cityCurrentWeather.weather[0].description}"
        >
        <p>Temperatur: ${cityCurrentWeather.main.temp}°C</p>
        <p>Känns som: ${cityCurrentWeather.main.feels_like}°C</p>
        <p>Väder: ${cityCurrentWeather.weather[0].description}</p>
        <p>Luftfuktighet: ${cityCurrentWeather.main.humidity}%</p>
        <p>Vind: ${cityCurrentWeather.wind.speed} m/s</p>
    `
        currentWeatherCard.classList.add("currentWeatherCard")
    } catch (error) {
        console.log("Something went wrong", error)
        currentWeatherCard.innerHTML = `
        <h2>Något gick fel</h2>
        <p>${error.message}</p>
    `
    }
}

const renderForecast = async (city) => {
    try {
        const cityForecast = await getForcastData(city)

        const dailyForecasts = cityForecast.list.filter((forecast) => {
            return forecast.dt_txt.includes("12:00:00")
        })

        const forecastCards = dailyForecasts.map((forecast) => {
            const date = new Date(forecast.dt_txt).toLocaleDateString("sv-SE", {
                weekday: "long",
                day: "numeric",
                month: "long"
            })

            return `
                <article class="forecastCard">
                    <h3>${date}</h3>
                    <img
                        src="https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png"
                        alt="${forecast.weather[0].description}"
                    >
                    <p>Temperatur: ${Math.round(forecast.main.temp)}°C</p>
                    <p>Väder: ${forecast.weather[0].description}</p>
                </article>
            `
        }).join("")

        forecastContainer.innerHTML = forecastCards
    } catch (error) {
        console.log("Something went wrong", error)
        currentWeatherCard.innerHTML = `
        <h2>Något gick fel</h2>
        <p>${error.message}</p>
    `
    }
}

const renderApp = async (city) => {
    renderCurrentWeatherCard(city)
    renderForecast(city)
}

cityForm.addEventListener("submit", (event) => {
    event.preventDefault()

    currentWeatherCard.innerHTML = ""

    const city = cityInput.value.trim()
    renderApp(city)
})