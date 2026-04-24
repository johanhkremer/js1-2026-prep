import { OPEN_WEATHER_API_KEY } from "../config.js"

const BASE_URL = "https://api.openweathermap.org"

export const getCurrentWeather = async (lat, lon) => {
    const response = await fetch(
        `${BASE_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=metric&lang=sv`
    )

    if (!response.ok) {
        throw new Error("Kunde inte hämta dagens väderdata")
    }

    const data = await response.json()

    return data
}

export const getForecastData = async (lat, lon) => {
    const response = await fetch(
        `${BASE_URL}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=metric&lang=sv`
    )

    if (!response.ok) {
        throw new Error("Kunde inte hämta väderprognosdata")
    }

    const data = await response.json()

    return data
}

export const getCoordinates = async (place) => {
    const query = encodeURIComponent(`${place},SE`)

    const response = await fetch(
        `${BASE_URL}/geo/1.0/direct?q=${query}&limit=1&appid=${OPEN_WEATHER_API_KEY}`
    )

    if (!response.ok) {
        throw new Error("Kunde inte hämta koordinater")
    }

    const data = await response.json()

    return data
}