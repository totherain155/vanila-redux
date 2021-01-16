// redux toDoList 
import { createStore } from "redux"



const form = document.querySelector("form"),
    input = form.querySelector("input"),
    ul = document.querySelector("ul")

/*
const showToDo = (text) => {
    const li = document.createElement("li")
    li.innerText = text
    ul.appendChild(li)
}
*/
const ADD_TODO = "ADD_TODO",
    DELETE_TODO = "DELETE_TODO"

const reducer = (state = [], action) => {
    console.log(action)
    switch (action.type) {
        case ADD_TODO:
            return []
        case DELETE_TODO:
            return []
        default:
            return state
    }
}


const store = createStore(reducer)


const handleSubmit = (event) => {
    event.preventDefault()
    const value = input.value
    input.value = '';
    // showToDo(value)
    store.dispatch({ type: ADD_TODO, text: value })

}


form.addEventListener("submit", handleSubmit)
