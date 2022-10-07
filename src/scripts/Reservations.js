import { getReservations, getClowns, deleteReservation, sendCompletions } from "./DataAccess.js";

const convertResToListElement = (requestArray) => {
    const clowns = getClowns()
    let html = requestArray
        .map((requestObj) => {
            return `<li>${requestObj.parentName} has reserved a clown for ${requestObj.childName}'s party on ${requestObj.date}!
            <select class="clowns" id="clowns">
    <option value="">Choose Performer</option>
    ${
        clowns.map(
            clown => {
                return `<option value="${requestObj.id}--${clown.id}">${clown.name}</option>`
            }
            ).join("")
        }
        </select>
        <button class="request__deny"
        id="request--${requestObj.id}">
        Deny
        </button>
        </li>
        `})
        .join(" ")
        return html
    }
    
    export const Reservations = () => {
        const requests = getReservations()
    
        let html = `
            <ul>
            ${convertResToListElement(requests)}
            </ul>
    
        `
    
        return html
    }

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [, requestId] = click.target.id.split("--")
        deleteReservation(parseInt(requestId))
    }
})

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {
            const [requestId, clownId] = event.target.value.split("--")

            const completedParties = {
                requestId: requestId,
                clownId: clownId,
                date_created: Date.now
            }
            sendCompletions(completedParties)
        }
    }
)
