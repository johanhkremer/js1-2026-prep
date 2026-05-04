import { getCoordinates } from "./services/weatherService.js"
import { renderDetailedWeather } from "./ui/detailView.js"
import { renderErrorState } from "./ui/shared.js"

const detailPageContainer = document.getElementById("detailPageContainer")

const loadDetailPage = async (city) => {
    try {
        const [location] = await getCoordinates(city)

        if (!location) {
            throw new Error("Kunde inte hitta staden")
        }

        const { lat, lon } = location

        renderDetailedWeather(lat, lon)
    } catch (error) {
        renderErrorState(detailPageContainer, error)
    }
}

const params = new URLSearchParams(window.location.search)

const city = params.get("code")

loadDetailPage(city)
