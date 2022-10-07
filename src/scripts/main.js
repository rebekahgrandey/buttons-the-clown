import { fetchReservationRequests, fetchClowns } from "./DataAccess.js"
import { ButtonsTheClown } from "./ButtonsTheClown.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchReservationRequests()
        .then(() => fetchClowns())
        .then(
            () => {
                mainContainer.innerHTML = ButtonsTheClown()
            }
        )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)