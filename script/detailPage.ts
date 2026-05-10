import { getCoordinates } from "./services/weatherService.js"
import type { Coordinates } from "./types.js"
import { renderDetailedWeather } from "./ui/detailView.js"
import { renderErrorState } from "./ui/shared.js"

const detailPageContainer = document.getElementById("detailPageContainer") as HTMLElement

const loadDetailPage = async (city: string | null) => {
    try {
        if (!city) {
            throw new Error("Kunde inte söka på staden")

        }

        const [location] = await getCoordinates(city)

        if (!location) {
            throw new Error("Kunde inte hitta staden")
        }

        const { lat, lon }: Coordinates = location

        renderDetailedWeather({ lat, lon })
    } catch (error: unknown) {
        renderErrorState(detailPageContainer, error)
    }
}

const params = new URLSearchParams(window.location.search)

const city = params.get("code")

loadDetailPage(city)
