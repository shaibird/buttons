import { sendRequest } from "./dataAccess.js"

export const ServiceForm = () => {
    let html = `
    <div class="field">
        <label class="label" for="parentName">Parent's Name</label>
        <input type="text" name="parentName" class="input" />
    </div>
    <div class="field">
        <label class="label" for="childName">Child's Name</label>
        <input type="text" name="childName" class="input" />
    </div>
    <div class="field">
        <label class="label" for="partyType">Type of Party</label>
        <input type="text" name="partyType" class="input" />
    </div>
    <div class="field">
    <label class="label" for="childrenAttending">Number of Children Expected</label>
    <input type="number" name="childrenAttending" class="input" />
</div>
    <div class="field">
        <label class="label" for="address">Event Address</label>
        <input type="text" name="address" class="input" />
    </div>
    <div class="field">
         <label class="label" for="serviceDate">Date needed</label>
         <input type="date" name="serviceDate" class="input" />
    </div>
    <div class="field">
        <label class="label" for="reservationTime">Time of the Event</label>
        <input type="number" name="reservationTime" class="input" />
    </div>
    
    <button class="button" id="submitRequest">Submit Request</button>
    `

    return html

}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        //get what the user has inputed 

        const userParentName = document.querySelector("input[name='parentName']").value
        const userChildName = document.querySelector("input[name='childName']").value
        const userAddress = document.querySelector("input[name='address']").value
        const userAttendence = document.querySelector("input[name='childrenAttending']").value
        const userDate = document.querySelector("input[name='serviceDate']").value
        const userTotalHours = document.querySelector("input[name='reservationTime']").value
        const userType = document.querySelector("input[name='partyType']").value

        const dataToSendToAPI = {
            type: userType,
            parentName: userParentName,
            childName: userChildName,
            address: userAddress,
            attendence: userAttendence,
            date: userDate,
            totalHours: userTotalHours
        }

        sendRequest(dataToSendToAPI)
    }
})