import { fetchRequests, fetchClowns } from "./dataAccess.js"

import { ClownJobs } from "./ClownJobs.js"

export const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests()
    .then(() => fetchClowns())
    .then(() => fetchRequests())
    .then(
        () => {
            mainContainer.innerHTML = ClownJobs()
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