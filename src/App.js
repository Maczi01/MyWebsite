import React, {useCallback, useEffect, useState} from 'react';
import {Route, BrowserRouter as Router, Switch, useLocation} from "react-router-dom";
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
import ReactPageScroller from 'react-page-scroller';
import LoadingPage from "./components/LoadingPage";
import {AnimatePresence} from "framer-motion";


const StyledApp = styled.div`
      background-color:  ${({theme}) => theme.colors.gray};
`;

const App = () => {

    const [isLoaded, setIsLoaded] = useState(false);

    const [counter, setCounter] = React.useState(0);
    let location = useLocation();
    useEffect(() => {
        const timer = setInterval(() => {
            setCounter(prevCount => prevCount + 1); // <-- Change this line!
            if (counter >= 2) {
                clearInterval(timer);
                setIsLoaded(true);
            }
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    },);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setIsLoaded(true)
    //     }, 1000);
    //
    //     return (() => {
    //         setIsLoaded(false);
    //     })
    // }, []);

    return (
        <ThemeProvider theme={lightTheme}>
            <StyledApp>
                <GlobalStyle backgroundColor={lightTheme.backgroundColor}/>
                {
                    isLoaded ?
                        <>
                            <AnimatePresence
                                exitBeforeEnter={false}
                            >
                                    <Navbar/>
                                    <Switch location={location} key={location.pathname}>
                                        <ReactPageScroller>


                                            <Route  key="frfe" exact path='/'>
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
                                        </ReactPageScroller>
                                    </Switch>
                            </AnimatePresence>
                        </>
                        :

                        <LoadingPage counter={counter}/>
                }
            </StyledApp>
        </ThemeProvider>
    );
}

export default App;
