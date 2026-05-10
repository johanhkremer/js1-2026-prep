export type Coordinates = {
    lat: number
    lon: number
}

export type LocationSearchResult = Coordinates & {
    name: string
    country: string
    state?: string
}

export type WeatherDescription = {
    id: number
    main: string
    description: string
    icon: string
}

export type CurrentWeather = {
    coord: Coordinates
    weather: WeatherDescription[]
    base: string
    main: {
        temp: number
        feels_like: number
        temp_min: number
        temp_max: number
        pressure: number
        humidity: number
        sea_level?: number
        grnd_level?: number
    }
    visibility?: number
    wind: {
        speed: number
        deg?: number
        gust?: number
    }
    clouds: {
        all: number
    }
    rain?: {
        "1h"?: number
        "3h"?: number
    }
    snow?: {
        "1h"?: number
        "3h"?: number
    }
    dt: number
    sys: {
        type?: number
        id?: number
        message?: number
        country: string
        sunrise: number
        sunset: number
    }
    timezone: number
    id: number
    name: string
    cod: number
}

export type ForecastItem = {
    dt_txt: string
    weather: WeatherDescription[]
    main: {
        temp: number
        feels_like: number
        humidity: number
    }
    wind: {
        speed: number
    }
}

export type ForecastData = {
    cod: string
    message: number
    cnt: number
    list: ForecastItem[]
    city: {
        id: number
        name: string
        coord: Coordinates
        country: string
        population: number
        timezone: number
        sunrise: number
        sunset: number
    }
}
