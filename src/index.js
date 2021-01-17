import { createStore } from "redux"

const form = document.querySelector("form"),
    input = form.querySelector("input"),
    ul = document.querySelector("ul")

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


// modify data   
const reducer = (state = [], action) => {

    switch (action.type) {
        case ADD_TODO:
            return [{ text: action.text, id: Date.now() }, ...state,]
        case DELETE_TODO:
            return state.filter(element => element.id !== action.id)

        //action은 id와 함께 넘어온다.
        default:
            return state
    }
}

const store = createStore(reducer)

store.subscribe(() => store.getState())

const dispatchAddToDo = (text) => {
    store.dispatch(addToDo(text))
}

const dispatchDeleteToDo = (event) => {
    const id = parseInt(event.target.parentNode.id)
    store.dispatch(deleteToDo(id))

}




const showToDo = () => {
    const toDo = store.getState()
    ul.innerHTML = ""
    toDo.forEach(element => {
        const li = document.createElement("li")
        const btn = document.createElement("button")
        btn.innerText = "DEL"
        li.id = element.id
        li.innerText = element.text
        btn.addEventListener("click", dispatchDeleteToDo)
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
    dispatchAddToDo(value)
}


form.addEventListener("submit", handleSubmit)