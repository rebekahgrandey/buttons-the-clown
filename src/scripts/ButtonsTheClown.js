import { ReservationForm } from "./ReservationForm.js"
import { Reservations } from "./Reservations.js"

export const ButtonsTheClown = () => {
    return `
    <h1>BUTTONS AND LOLLIPOP THE CLOWNS!</h1>
    <h2>BOOK TODAY! Fill out the service form below to reserve</h2>
    <section class="reservationForm">
        ${ReservationForm()}
    </section>

    <section class="serviceRequests">
        <h2>Service Requests</h2>
        ${Reservations()}
    </section>
    `
}