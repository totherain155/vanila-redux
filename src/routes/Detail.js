// detail page , mapStateToProps, connect 

import React from "react"
import { connect } from "react-redux"


const Detail = ({ toDos }) => {
    return (
        <div>
            <h3>{toDos?.text}</h3>
            <h5>created at : {toDos?.id}</h5>
        </div>

    )
}


const mapStateToProps = (state, ownProps) => {
    const { match: { params: { id } } } = ownProps
    console.log(id)
    return (
        { toDos: state.find(element => element.id === parseInt(id)) }
    )

}


export default connect(mapStateToProps)(Detail);