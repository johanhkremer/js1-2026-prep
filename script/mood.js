const buttonHappy = document.getElementById("button-happy")
const buttonAngry = document.getElementById("button-angry")
const buttonCalm = document.getElementById("button-calm")
const moodBox = document.getElementById("mood-box")
const moodBoxText = document.getElementById("mood-box-text")
const previousMoodText = document.getElementById("previous-mood")
const buttonReset = document.getElementById("button-reset")

let currentMood = ""

const setMood = (color, text) => {
    const previousMood = currentMood
    currentMood = text
    moodBox.classList.remove("red", "green", "violet")
    moodBoxText.textContent = text
    moodBox.classList.add(color)

    previousMoodText.textContent = `Previos mood: ${previousMood}`
}

buttonHappy.addEventListener("click", () => {
    setMood("green", "Happy 😀")
    // moodBox.classList.remove("red", "green", "violet")
    // moodBoxText.textContent = "Happy 😀"
    // moodBox.classList.add("green")
})

buttonAngry.addEventListener("click", () => {
    setMood("red", "Angry 😡")
    // moodBox.classList.remove("red", "green", "violet")
    // moodBoxText.textContent = "Angry 😡"
    // moodBox.classList.add("red")
})

buttonCalm.addEventListener("click", () => {
    setMood("violet", "Calm 😌")
    // moodBox.classList.remove("red", "green", "violet")
    // moodBoxText.textContent = "Calm 😌"
    // moodBox.classList.add("violet")
})

buttonReset.addEventListener("click", () => {
    moodBox.classList.remove("red", "green", "violet")
    moodBoxText.textContent = ""
    previousMoodText.textContent = ""
})