import { createStore } from "redux"

const form = document.querySelector("form"),
    input = form.querySelector("input"),
    ul = document.querySelector("ul")

const ADD_TODO = "ADD_TODO",
    DELETE_TODO = "DELETE_TODO"



const reducer = (state = [], action) => {
    console.log(action)
    switch (action.type) {
        case ADD_TODO:
            return [...state, { text: action.text, id: Date.now() }]
        case DELETE_TODO:
            return state.filter(element => element.id !== parseInt(action.id))
        default:
            return state

    }
}

const deleteToDo = (event) => {
    const id = parseInt(event.target.parentNode.id)
    store.dispatch({ type: DELETE_TODO, id })
}


const store = createStore(reducer)

store.subscribe(() => store.getState())

const showToDo = () => {
    const toDo = store.getState()
    ul.innerHTML = ""
    toDo.forEach(element => {
        const li = document.createElement("li")
        const btn = document.createElement("button")
        btn.innerText = "DEL"
        li.innerText = element.text
        li.id = element.id
        btn.addEventListener("click", deleteToDo)
        li.appendChild(btn)
        ul.appendChild(li)
    })
}

store.subscribe(showToDo)


/*
const showToDo = (text) => {
    const li = document.createElement("li")
    li.innerText = text
    ul.appendChild(li)

}
*/




const handleSubmit = (event) => {
    event.preventDefault()
    const value = input.value
    input.value = ""
    // showToDo(value)
    store.dispatch({ type: ADD_TODO, text: value })

}


form.addEventListener("submit", handleSubmit)