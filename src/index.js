import { createStore } from "redux"

const add = document.getElementById("add"),
    minus = document.getElementById("minus"),
    span = document.querySelector("span")


const countModifier = (count = 0, action) => {
    console.log(count, action)
    if (action.type === "ADD") {
        return count = count + 1
    } else if (action.type === "MINUS") {
        return count = count - 1
    } else {
        return count
    }

}


const countStore = createStore(countModifier)

countStore.dispatch({ type: "ADD" })
countStore.dispatch({ type: "ADD" })
countStore.dispatch({ type: "ADD" })
countStore.dispatch({ type: "ADD" })
countStore.dispatch({ type: "MINUS" })

console.log(countStore.getState())



