import { Requests } from "./Requests.js"
import { ServiceForm } from "./ServiceForm.js"

export const ClownJobs = () => {
    return `
    <h1> Buttons the Clown!</h1>
    <section class="clownForm">
        ${ServiceForm()}
    </section>
    
    <section class="clownRequests"
        <h2>Clown Requests</h2>
            ${Requests()}
        </section>`
}