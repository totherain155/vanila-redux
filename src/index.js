const add = document.getElementById("add"),
    minus = document.getElementById("minus"),
    span = document.querySelector("span")

let count = 0

span.innerText = count

const updateCount = () => {
    span.innerText = count
}

const handleAdd = () => {
    count = count + 1
    updateCount()
}

const handleMinus = () => {
    count = count - 1
    updateCount()
}


add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

