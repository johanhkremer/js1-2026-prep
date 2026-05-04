export const renderLoadState = (container, message) => {
    container.innerHTML = `<p>${message}</p>`
}

export const renderErrorState = (container, error) => {
    container.innerHTML = `
        <div class="errorMessage">
            <h2>Något gick fel</h2>
            <p>${error.message}</p>
        </div>
    `
}
