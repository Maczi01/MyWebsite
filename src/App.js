import React from "react";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import AboutContent from "./About/AboutContent";
import ResumeContent from "./Resume/ResumeContent";
import ProjectsContent from "./Projects/ProjectsContent";
import {Link} from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <div>
                    <Link to="/">O mnie</Link><br/>
                    <Link to="/resume">Napisz do mnie</Link><br/>
                    <Link to="/projects">Projekty</Link><br/>
                </div>
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
