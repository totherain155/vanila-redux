import { createStore } from "redux";

const form = document.querySelector("form"),
    input = form.querySelector("input"),
    ul = document.querySelector("ul")


//showToDo

const showToDo = (text) => {

    const li = document.createElement("li")
    li.innerText = text
    ul.appendChild(li)
}



const handleSubmit = (event) => {
    event.preventDefault()
    const value = input.value
    input.value = '';
    showToDo(value)



}

form.addEventListener("submit", handleSubmit)