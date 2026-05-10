export const renderLoadState = (container: HTMLElement, message: string) => {
    container.innerHTML = `<p>${message}</p>`
}

export const renderErrorState = (container: HTMLElement, error: unknown) => {
    const message = error instanceof Error ? error.message : "Ett okänt fel inträffade"

    container.innerHTML = `
        <div class="errorMessage">
            <h2>Något gick fel</h2>
            <p>${message}</p>
        </div>
    `
}
