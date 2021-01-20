import React, { useState } from "react"

// form, input, button, useState

const Home = () => {
    const [text, setText] = useState("")
    const onChange = (event) => {
        setValue(event.target.value)
    }
    const onSubmit = () => {
        setText("")
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>Add</button>
            </form>
        </div>
    )
}




export default Home;