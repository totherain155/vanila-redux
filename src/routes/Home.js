import React, { useState } from "react"
import { connect } from "react-redux"

// form, input, button, useState

const Home = ({ toDos }) => {
    //console.log(props)
    const [text, setText] = useState("")
    const onChange = (event) => {
        setText(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        setText("")
        // console.log(text)
    }

    return (
        <div>
            <h3>To Do List</h3>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>Add</button>
            </form>
            <ul>
                {JSON.stringify(toDos)}
            </ul>
        </div>
    )
}
const mapToProps = (state) => {
    return { toDos: state }
}

export default connect(mapToProps)(Home)
