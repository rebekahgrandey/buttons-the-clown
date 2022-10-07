import { sendReservationRequest } from "./dataAccess.js"

export const ReservationForm = () => {
    let html = `
    <div class="field">
        <label class="label" for="parentName">Parent/Legal Guardian's Name</label>
        <input type="text" name="parentName" class="input" />
    </div>
    <div class="field">
        <label class="label" for="childName">Child's Name</label>
        <input type="text" name="childName" class="input" />
    </div>
    <div class="field">
        <label class="label" for="childCount">Child Count</label>
        <input type="number" name="childCount" class="input" />
    </div>
    <div class="field">
        <label class="label" for="address">Address</label>
        <input type="text" name="address" class="input" />
    </div>
    <div class="field">
        <label class="label" for="date">Date</label>
        <input type="date" name="date" class="input" />
    </div>
    <div class="field">
        <label class="label" for="length">Duration of Party</label>
        <input type="number" name="length" class="input" />
    </div>

    <button class="button" id="submitRequest">Submit Request</button>
`
    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const userParentName = document.querySelector("input[name='parentName']").value
        const userChildName = document.querySelector("input[name='childName']").value
        const userChildCount = document.querySelector("input[name='childCount']").value
        const userAddress = document.querySelector("input[name='address']").value
        const userDate = document.querySelector("input[name='date']").value
        const userDuration = document.querySelector("input[name='length']").value

        // Make an object out of the user input
        const sendToAPI = {
            parentName: userParentName,
            childName: userChildName,
            childCount: userChildCount,
            address: userAddress,
            date: userDate,
            duration: userDuration
        }

        // Send the data to the API for permanent storage
        sendReservationRequest(sendToAPI)
    }
})