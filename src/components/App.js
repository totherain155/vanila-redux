import React from "react";
//HashRouter as Router
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../routes/Home"



const App = () => {
    return (
        <Router>
            <Route path="/" exact component={Home} />
        </Router>
    )
}


export default App;
