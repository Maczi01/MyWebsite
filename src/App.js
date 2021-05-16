import React from "react";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import AboutContent from "./About/AboutContent";
import ResumeContent from "./Resume/ResumeContent";
import ProjectsContent from "./Projects/ProjectsContent";
import Navbar from "./components/Navbar";
import HomeContent from "./Home/HomeContent";
import {ThemeProvider} from "styled-components";
import {lightTheme} from './theme/theme'
import styled from "styled-components";
import GlobalStyle from "./theme/GlobalStyle";
import ContactContent from "./Contact/ContactContent";

const StyledApp = styled.div`
      background-color: ${({theme}) => theme.backgroundColor};
`;

function App() {
    return (
        <StyledApp>
            <ThemeProvider theme={lightTheme}>
                <GlobalStyle backgroundColor={lightTheme.backgroundColor}/>
                <Router>
                    <Navbar/>
                    <Switch>
                        <Route exact path='/'>
                            <HomeContent/>
                        </Route>
                        <Route exact path='/about'>
                            <AboutContent/>
                        </Route>
                        <Route path='/resume'>
                            <ResumeContent/>
                        </Route>
                        <Route path='/projects'>
                            <ProjectsContent/>
                        </Route>
                        <Route path='/contact'>
                            <ContactContent/>
                        </Route>
                    </Switch>
                </Router>
            </ThemeProvider>
        </StyledApp>
    );
}

export default App;
