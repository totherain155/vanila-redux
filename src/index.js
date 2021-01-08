import { createStore } from "redux"

const add = document.getElementById("add"),
    minus = document.getElementById("minus"),
    span = document.querySelector("span")

//createStore, action , subscribe

const countModifier = (count = 0, action) => {
    // modify createStore 
    console.log(count, action)
    if (action.type === "ADD") {
        return count + 1
    } else if (action.type === "MINUS") {
        return count - 1
    } else {
        return count
    }
}


const countStore = createStore(countModifier)


const onChange = () => {
    span.innerText = countStore.getState()
}


countStore.subscribe(onChange)

console.log(countStore)

add.addEventListener("click", () => countStore.dispatch({ type: "ADD" }))
minus.addEventListener("click", () => countStore.dispatch({ type: "MINUS" }))

