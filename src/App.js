import React from "react";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import AboutContent from "./About/AboutContent";

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <AboutContent/>
                    </Route>
                    <Route exact path='/projects'>
                        <AboutContent/>
                    </Route>
                    <Route exact path='/resume'>
                        <ResumeContent/>
                    </Route>
                    <Route exact path='/'>
                        <AboutContent/>
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
