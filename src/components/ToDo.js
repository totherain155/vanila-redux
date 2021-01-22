import React from "react"
import { connect } from "react-redux"
import { actionCreators } from "../store"


// mapDispatchToProps

const ToDo = ({ text, onBtnClick }) => {
    return (
        <li>
            {text} <button onClick={onBtnClick}>DEL</button>
        </li>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id))
    }
}


export default connect(null, mapDispatchToProps)(ToDo);