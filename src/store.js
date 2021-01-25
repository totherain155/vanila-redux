// createStore, createAction, payload, createReducer
import { createAction, createReducer } from "@reduxjs/toolkit"
import { createStore } from "redux"

/*
const ADD = "ADD"
const DELETE = "DELETE"
*/

const addToDo = createAction("ADD"),
    deleteToDo = createAction("DELETE")

/*   
const reducer = (state = [], action) => {
   switch (action.type) {
       case addToDo.type:
           return [{ text: action.payload, id: Date.now() }, ...state]
       case deleteToDo.type:
           return state.filter(element => element.id !== action.payload)
       default:
           return state
   }
}
*/
const reducer = createReducer([], {
    [addToDo]: (state, action) => {
        state.push({ text: action.payload, id: Date.now() })
    },
    [deleteToDo]: (state, action) => {
        return state.filter(element => element.id !== action.payload)
    }

})


const store = createStore(reducer)

export const actionCreators = {
    addToDo,
    deleteToDo
}


export default store;