// useState, onSubmit

import React, { useState } from "react"


const Home = () => {
    const [text, setText] = useState("")
    const onChange = (event) => {
        setText(event.target.value)
    }

    const onSubmit = () => {
        setText('')
    }

    return (
        <div>
            <h3>To Do List </h3>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>Add</button>
            </form>
        </div>
    )
}



export default Home;