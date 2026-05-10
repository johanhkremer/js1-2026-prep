//tsc när jag gjort ändringar

// TypeScript ar JavaScript med typer.
// Typerna hjalper oss hitta fel innan koden kor i browsern.

// 1. Primitiva typer
const city: string = "Stockholm"
const temperature: number = 18
const isRaining: boolean = false

console.log(city, temperature, isRaining)

// TypeScript stoppar fel typ av varde.
// const wrongTemperature: number = "arton"


// 2. Type inference
// TypeScript kan ofta lista ut typen sjalv.
const country = "Sverige"
const population = 10_500_000

// country ar string och population ar number, trots att vi inte skrev det.
console.log(country.toUpperCase())
console.log(population.toFixed(0))


// 3. Arrayer
const cities: string[] = ["Stockholm", "Goteborg", "Malmo"]
const temperatures: number[] = [18, 16, 20]

cities.push("Uppsala")
// cities.push(42)

console.log(cities)
console.log(temperatures)


// 4. Objekt
const currentWeather: {
    city: string
    temperature: number
    description: string
} = {
    city: "Stockholm",
    temperature: 18,
    description: "klart",
}

console.log(`${currentWeather.city}: ${currentWeather.temperature} grader`)


// 5. Type alias
// En type ar bra nar samma form aterkommer pa flera stallen.
type Coordinates = {
    lat: number
    lon: number
}

const stockholmCoordinates: Coordinates = {
    lat: 59.3293,
    lon: 18.0686,
}

console.log(stockholmCoordinates)


// 6. Interface
// Interface passar ocksa bra for objektformer.
interface WeatherReport {
    city: string
    temperature: number
    coordinates: Coordinates
}

const report: WeatherReport = {
    city: "Stockholm",
    temperature: 18,
    coordinates: stockholmCoordinates,
}

console.log(report)


// 7. Funktioner
// Parametrar och returvarde kan typas.
const formatTemperature = (temperature: number): string => {
    return `${Math.round(temperature)} grader`
}

console.log(formatTemperature(18.4))
// formatTemperature("varmt")


// 8. Funktion som tar emot ett objekt
const createWeatherText = (weatherReport: WeatherReport): string => {
    return `${weatherReport.city}: ${formatTemperature(weatherReport.temperature)}`
}

console.log(createWeatherText(report))


// 9. Union types
// En variabel kan tillatas vara flera typer.
type LoadingState = "idle" | "loading" | "success" | "error"

let state: LoadingState = "idle"

state = "loading"
state = "success"
// state = "finished"

console.log(state)


// 10. Optional properties
// ? betyder att egenskapen far saknas.
type User = {
    name: string
    email?: string
}

const userWithoutEmail: User = {
    name: "Johan",
}

const userWithEmail: User = {
    name: "Sam",
    email: "sam@example.com",
}

console.log(userWithoutEmail.email)
console.log(userWithEmail.email)


// 11. Null och type narrowing
// Nar nagot kan vara null maste vi kontrollera det innan vi anvander vardet.
const findCity = (search: string): string | null => {
    const savedCity = "Stockholm"

    if (search === savedCity) {
        return savedCity
    }

    return null
}

const foundCity = findCity("Stockholm")

if (foundCity) {
    console.log(foundCity.toUpperCase())
} else {
    console.log("Staden hittades inte")
}


// 12. DOM-exempel
// getElementById returnerar HTMLElement | null.
// Darfor behover vi antingen kontrollera elementet eller typa det mer specifikt.
const inputElement = document.getElementById("cityInput")

if (inputElement instanceof HTMLInputElement) {
    console.log(inputElement.value)
}


// 13. Generics
// Generics later oss skapa funktioner som bevarar typen.
const getFirstItem = <T>(items: T[]): T | undefined => {
    return items[0]
}

const firstCity = getFirstItem(cities)
const firstTemperature = getFirstItem(temperatures)

console.log(firstCity)
console.log(firstTemperature)


// 14. Promise och async
// Async-funktioner returnerar alltid en Promise.
const getFakeWeather = async (): Promise<WeatherReport> => {
    return {
        city: "Stockholm",
        temperature: 18,
        coordinates: stockholmCoordinates,
    }
}

getFakeWeather().then((weather) => {
    console.log(createWeatherText(weather))
})
