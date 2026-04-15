const paketKostnad = (vikt) => {
    return 10 * vikt
}

// Synkron callback
const beställningMottagen = (meddelande, beräknaKostnad) => {
    const kostnad = beräknaKostnad(3)
    console.log(`${meddelande} ${kostnad} SEK`)
}

const paketetSkickat = (meddelande, påväg, levererat) => {
    setTimeout(() => {
        console.log(meddelande)
        påväg()
        levererat("Ditt paket har nu levererats!")
    }, 2000)
}

const paketPåväg = () => {
    console.log("Paketet är nu på väg mot dig")
}

// Asynkron callback
const paketLevererats = (meddelande) => {
    console.log(meddelande)
}

const beställPaketLeverans = () => {
    beställningMottagen("Beställning mottagen, kostnad för leverans:", paketKostnad)
    console.log("-----------------------")

    paketetSkickat(
        "Ert paket har packats och skickats från vårt lager",
        paketPåväg,
        paketLevererats
    )
}

beställPaketLeverans()