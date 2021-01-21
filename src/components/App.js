import React from "react"
import { HashRouter as Router, Route } from "react-router-dom"
import Home from "../routes/Home"




const App = () => {
    return (
        <div>
            <Router>
                <Route path="/" exact component={Home}></Route>

            </Router>
        </div>
    )
}


export default App;



