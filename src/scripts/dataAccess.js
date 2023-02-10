import { mainContainer } from "./main.js"

const applicationsState = {
    requests: [],
    clowns: [],
    completions: []


}

const API = "http://localhost:3000"

export const fetchRequests = () => {
    return fetch(`${API}/requests`)
    .then(res => res.json())
    .then(
        (clownRequests) => {
            applicationsState.requests = clownRequests
        }
    )
}

export const getRequests = () => {
    return applicationsState.requests.map(state => ({...state}))
}

export const sendRequest = (requestingClowns) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(requestingClowns)
    }

    return fetch(`${API}/requests`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const fetchClowns = () => {
    return fetch(`${API}/clowns`)
    .then(response => response.json())
    .then(
        (data) => {
            applicationsState.clowns = data
        }
    )
}

export const getClowns = () => {
    return applicationsState.clowns.map(data => ({...data}))
}
 export const fetchCompletions = () => {
    return fetch(`${API}/completions`)
    .then(response => response.json())
    .then(
        (data => {
            applicationsState.completions = data
        })
    )
 }

export const completeRequest = (completions) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(completions)
    }
    
    return fetch(`${API}/completions`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
 }



 export const deleteRequest = (id) => {
    return fetch (`${API}/requests/${id}`, { method: "DELETE"})
    .then(
        () => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        }
    )
 }


 // look for the completetions and make sure they line up with the database.