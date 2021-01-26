import React, { useState } from "react"
import { connect } from "react-redux"
import { add } from "../store.js"
import ToDo from "../components/ToDo"

const Home = ({ toDos, addToDo }) => {
    // input tag , useState
    const [text, setText] = useState("")
    const onChange = (event) => {
        setText(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        addToDo(text)
        setText("")
    }

    return (

        <div>
            <h3>To Do List </h3>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>ADD</button>

            </form>
            <ul>
                {toDos.map(element => <ToDo {...element} key={element.id} />)}
            </ul>
        </div>
    )

}

const mapStateToProps = (state) => {
    return { toDos: state }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToDo: (text) => dispatch(add(text))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);