import { createStore } from "redux"

const add = document.getElementById("add"),
    minus = document.getElementById("minus"),
    span = document.querySelector("span")

//createStore, action , subscribe

const ADD = "ADD",
    MINUS = "MINUS"

span.innerText = 0;

const countModifier = (count = 0, action) => {

    switch (action.type) {
        case ADD:
            return count + 1
        case MINUS:
            return count - 1
        default:
            return count
    }

}
const countStore = createStore(countModifier)

const onChange = () => {
    span.innerText = countStore.getState()
}

countStore.subscribe(onChange)


add.addEventListener("click", () => countStore.dispatch({ type: ADD }))
minus.addEventListener("click", () => countStore.dispatch({ type: MINUS }))
