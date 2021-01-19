import React from "react"
import { HashRouter as Router, Route } from "react-router-dom"
import Home from "../routes/Home"
import Detail from "../routes/Detail"



const App = () => {
    return (
        <div>
            <Router>
                <Route path="/" exact component={Home}></Route>
                <Route path="/:id" component={Detail}></Route>
            </Router>
        </div>
    )
}


export default App;



