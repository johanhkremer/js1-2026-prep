const LAST_SEARCHED_CITY_KEY = "lastSearchedCity"

export const saveLastSearchedCity = (city: string): void => {
    try {
        localStorage.setItem(LAST_SEARCHED_CITY_KEY, city)
    } catch (error) {
        console.log("Kunde inte spara senaste stad i localStorage", error)
    }
}

export const getLastSearchedCity = (): string | null => {
    try {
        return localStorage.getItem(LAST_SEARCHED_CITY_KEY)
    } catch (error) {
        console.log("Kunde inte läsa senaste stad från localStorage", error)
        return null
    }
}
