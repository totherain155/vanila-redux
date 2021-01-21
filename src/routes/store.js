// createStore


import React from "react"
import { createStore } from "redux"

const ADD = "ADD",
    DELETE = "DELETE"

export const addToDo = (text) => {
    return {
        type: ADD,
        text
    }
}

export const deleteToDo = (id) => {
    return {
        type: DELETE,
        id
    }
}

const reducer = (state = ["lala"], action) => {
    switch (action.type) {
        case ADD:
            return [{ text: action.text, id: Date.now() }, ...state]
        case DELETE:
            return state.filter(element => element.id !== action.id)
        default:
            return state;
    }
}

const store = createStore(reducer)



export default store;

store.getState()
