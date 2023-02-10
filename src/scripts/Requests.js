import { completeRequest, deleteRequest, getClowns, getRequests } from "./dataAccess.js";



export const Requests = () => {
    const requests = getRequests()
    const clowns = getClowns()

    let html = `
        <div class="row--header">
            <div class="request_description">Description</div>
            <div class="request_completion">Completed By</div>
            <div class="request_delete"></div>
        </div>
    <ul>
         ${
                requests.map(
                    (request) => {
                    return `
                    <div class="${request.completed ? "request--completed" : ""} request">
                        <div class="req__des">${request.childName}'s ${request.type}</div>
                        <div class="req__comp">
                        ${
                            request.completed
                            ? ""
                            : `<select class="clowns" id="clowns">
                                <option value="">Choose</option>
                                ${
                                    clowns.map(
                                        clown => {
                                            return `<option value="${requests.id}--${clown.id}">${clown.name}</option>`
                                        }
                                    ).join("")
                                }
                            </select>`
                        }
                    </div>
                    <div class="request_delete">
                        <button class="button request_delete" id="request--${request.id}">Deny!</button>
                    </div>
                </div>`
                }
                ).join("")
         }
        </div>
        `
                
                
                
    return html

}


// const returnString = (r) => {
//     let html = `
//     <li>${r.childName}'s ${r.type} on ${r.date}
//     <button class="request_delete"
//                 id="request--${r.id}">
//             Deny!
//         </button>
//         </li>`

//         return html
// }

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {
            const [requestId, clownId] = event.target.value.split("--")

            const completion = {
                clownId: parseInt(clownId),
                requestId: parseInt(requestId),
                date_created: Date.now()
            }
            completeRequest(completion)
            }
        }

)