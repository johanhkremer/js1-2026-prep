import { getCurrentWeather } from "../services/weatherService.js";
import { getForecastData } from "../services/weatherService.js";
import { renderErrorState, renderLoadState } from "./shared.js";
const detailPageContainer = document.getElementById("detailPageContainer");
export const renderDetailedWeather = async ({ lat, lon }) => {
    try {
        renderLoadState(detailPageContainer, "Laddar detaljsida");
        const currentWeather = await getCurrentWeather({ lat, lon });
        const forecast = await getForecastData({ lat, lon });
        const dailyForecasts = forecast.list.filter((forecastItem) => {
            return forecastItem.dt_txt.includes("12:00:00");
        });
        const forecastCards = dailyForecasts.map((forecastItem) => {
            const date = forecastItem.dt_txt.split(" ")[0];
            return `
                <article class="forecastCard">
                    <h3>${date}</h3>
                    <img
                        src="https://openweathermap.org/img/wn/${forecastItem.weather[0].icon}@2x.png"
                        alt="${forecastItem.weather[0].description}"
                    >
                    <p>Temperatur: ${Math.round(forecastItem.main.temp)}°C</p>
                    <p>Känns som: ${Math.round(forecastItem.main.feels_like)}°C</p>
                    <p>Väder: ${forecastItem.weather[0].description}</p>
                    <p>Luftfuktighet: ${forecastItem.main.humidity}%</p>
                    <p>Vind: ${forecastItem.wind.speed} m/s</p>
                </article>
            `;
        }).join("");
        detailPageContainer.innerHTML = `
            <article class="weatherCard">
                <div class="weatherCardTop">
                    <h2>${currentWeather.name}</h2>
                    <img
                        src="https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png"
                        alt="${currentWeather.weather[0].description}"
                    >
                </div>

                <div class="weatherCardBottom">
                    <p>Temperatur: ${Math.round(currentWeather.main.temp)}°C</p>
                    <p>Känns som: ${Math.round(currentWeather.main.feels_like)}°C</p>
                    <p>Väder: ${currentWeather.weather[0].description}</p>
                    <p>Luftfuktighet: ${currentWeather.main.humidity}%</p>
                    <p>Lufttryck: ${currentWeather.main.pressure} hPa</p>
                    <p>Vind: ${currentWeather.wind.speed} m/s</p>
                </div>
            </article>

            <h2>Prognos kommande dagar</h2>

            <section id="forecastContainer">
                ${forecastCards}
            </section>
        `;
    }
    catch (error) {
        console.log("Something went wrong", error);
        renderErrorState(detailPageContainer, error);
    }
};
