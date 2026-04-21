import { OPEN_WEATHER_API_KEY } from "./config.js"

const cityForm = document.getElementById("cityForm")
const cityInput = document.getElementById("cityInput")
const currentWeatherCard = document.getElementById("currentWeatherCard")

const getWeather = async (place) => {
    const [location] = await getCoordinates(place)

    if (!location) {
        throw new Error("Kunde inte hitta staden")
    }

    const { lat, lon } = location

    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=metric&lang=sv`
    )

    if (!response.ok) {
        throw new Error("Kunde inte hämta väderdata")
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

const renderWeatherCard = async (city) => {
    try {
        const cityWeather = await getWeather(city)

        console.log(cityWeather)

        currentWeatherCard.innerHTML = `
        <h2>${cityWeather.name}</h2>
        <img 
            src="https://openweathermap.org/img/wn/${cityWeather.weather[0].icon}@2x.png"
            alt="${cityWeather.weather[0].description}"
        >
        <p>Temperatur: ${cityWeather.main.temp}°C</p>
        <p>Känns som: ${cityWeather.main.feels_like}°C</p>
        <p>Väder: ${cityWeather.weather[0].description}</p>
        <p>Luftfuktighet: ${cityWeather.main.humidity}%</p>
        <p>Vind: ${cityWeather.wind.speed} m/s</p>
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
cityForm.addEventListener("submit", (event) => {
    event.preventDefault()

    currentWeatherCard.innerHTML = ""

    const city = cityInput.value.trim()

    renderWeatherCard(city)
})