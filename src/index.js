import { createStore } from "redux";

const form = document.querySelector("form"),
    input = form.querySelector("input"),
    ul = document.querySelector("ul")


//showToDo
const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"

const reducer = (state = [], action) => {

    switch (action.type) {
        case ADD_TODO:
            return [...state, { text: action.text, id: Date.now() }]
        case DELETE_TODO:
            return []
        default:
            return state
    }
}

const store = createStore(reducer)


store.subscribe(() => console.log(store.getState()))

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
    input.value = '';
    store.dispatch({ type: ADD_TODO, text: value })
}

form.addEventListener("submit", handleSubmit)