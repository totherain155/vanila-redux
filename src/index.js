import { createStore } from "redux"

const add = document.getElementById("add"),
    minus = document.getElementById("minus"),
    span = document.querySelector("span")

//createStore, action 

const countModifier = (count = 0, action) => {
    if (action.type === "ADD") {
        return count + 1
    } else if (action.type === "MINUS") {
        return count - 1
    } else {
        return
    }
}



const countStore = createStore(countModifier)

countStore.dispatch({ type: "ADD" })
countStore.dispatch({ type: "ADD" })
countStore.dispatch({ type: "ADD" })
countStore.dispatch({ type: "MINUS" })

console.log(countStore.getState())




