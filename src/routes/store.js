import { createStore } from "redux"

const ADD_TODO = "ADD_TODO",
    DELETE_TODO = "DELETE_TODO";

export const addToDo = (text) => {
    return (
        {
            type: ADD_TODO,
            text
        }
    )
}

export const deleteToDo = (id) => {
    return ({
        type: DELETE_TODO,
        id
    })
}

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, { text: action.text, id: Date.now() }]
        case DELETE_TODO:
            return state.filter(element => element.id !== action.id)
        default:
            return state
    }
}


const store = createStore(reducer)

store.subscribe()


export default store