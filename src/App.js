import React from "react";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import AboutContent from "./About/AboutContent";
import ResumeContent from "./Resume/ResumeContent";
import ProjectsContent from "./Projects/ProjectsContent";
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path='/'>
                        <AboutContent/>
                    </Route>
                    <Route path='/resume'>
                        <ResumeContent/>
                    </Route>
                    <Route path='/projects'>
                        <ProjectsContent/>
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
