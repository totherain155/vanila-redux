// redux toDoList 
import { createStore } from "redux"

//deleteToDo , break down it into tiny function


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

const addToDo = (text) => {
    return {
        type: ADD_TODO,
        text
    }

}

const deleteToDo = (id) => {
    return {
        type: DELETE_TODO,
        id
    }

}

const reducer = (state = [], action) => {
    console.log(action)
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

const dispatchAddToDo = (text) => {
    store.dispatch(addToDo(text))
}

const dispatchDeleteToDo = (event) => {
    const id = event.target.parentNode.id;
    store.dispatch(deleteToDo(id))
}

const showToDo = () => {
    const toDos = store.getState()
    ul.innerHTML = ""
    toDos.forEach(element => {
        const li = document.createElement("li")
        const btn = document.createElement("button")
        btn.innerText = "DEL"
        btn.addEventListener("click", dispatchDeleteToDo)
        li.id = element.id
        li.innerText = element.text
        li.appendChild(btn)
        ul.appendChild(li)
    }
    )
}

store.subscribe(showToDo)



const handleSubmit = (event) => {
    event.preventDefault()
    const value = input.value
    input.value = '';
    // showToDo(value)
    dispatchAddToDo(value)

}


form.addEventListener("submit", handleSubmit)
