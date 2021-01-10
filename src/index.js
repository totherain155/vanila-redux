import { createStore } from "redux"

// make toDoList by vanilla JS

const form = document.querySelector("form"),
    input = document.querySelector("input"),
    ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO",
    DELETE_TODO = "DELETE_TODO"

const reduce = (state = [], action) => {
    //switch 
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

const store = createStore(reduce)

/*
const showToDo = (text) => {
    const li = document.createElement("li");
    li.innerText = text
    ul.appendChild(li)
}
*/


const handleSubmit = (event) => {
    event.preventDefault()
    const toDo = input.value;
    input.value = "";
    //  showToDo(toDo)
    store.dispatch({ type: ADD_TODO, text: toDo })
}



form.addEventListener("submit", handleSubmit)