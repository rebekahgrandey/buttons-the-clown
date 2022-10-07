//2. fetched data is stored here
const applicationState = {
    reservations: [],
    clowns: []
}

//1. gets the data, converts to javascript, & stores in transient object variable above
export const fetchReservationRequests = () => {
    return fetch('http://localhost:8088/reservations')
        .then(response => response.json())
        .then(
            (serviceReservations) => {
                // Store the external state in application state
                applicationState.reservations = serviceReservations
            }
        )
}

export const getReservations = () => {
    return applicationState.reservations.map(reservation => ({ ...reservation }))
}

const mainContainer = document.querySelector("#container")

//* this sends data to RESERVATIONS (in API), NOT completed requests
export const sendReservationRequest = (userReservationRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userReservationRequest)
    }


    return fetch('http://localhost:8088/reservations', fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const fetchClowns = () => {
    return fetch('http://localhost:8088/clowns')
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.clowns = data
            }
        )
}

//* sends to COMPLETED PARTIES, not reservations
export const sendCompletions = (userReservationRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userReservationRequest)
    }


    return fetch('http://localhost:8088/completedParties', fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const getClowns = () => {
    return applicationState.clowns.map(clown => ({ ...clown }))
}


//~ NOTE: Transient state objects will be stored in a variable within a module, NOT THE DATABASE!!

//* this is for DENY button
export const deleteReservation = (id) => {
    return fetch(`http://localhost:8088/reservations/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}