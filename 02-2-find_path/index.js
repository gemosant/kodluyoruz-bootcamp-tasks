const flights = [['USA', 'BRA'], ['JPN', 'PHL'], ['UAE', 'JPN'], ['BRA', 'UAE']]

const departures = flights.map((i) => i[0])

const destination = flights.map((i) => i[1])

const begining = departures.filter((country) => {
    !destination.includes(country)[0]
}) 

const next = [begining]
const ticket = begining

while (next.length <= flights.length) {
    flights.map((nextCountry) => {
        if (nextCountry[0] == ticket) {
            ticket = nextCountry[1]
            next.push(ticket)
        }
    })
}

console.log(next)