import styled from "styled-components";
import Sidebar from "./Sidebar";
import React from "react";
import PageTransitioning from "./PageTransitioning";

const Container = styled.div`
     width: 80vw; 
     height:100vh;       
     display: flex;
     flex-direction: column;
     margin: 0 auto;
     background:  ${({theme}) => theme.colors.gray};
     //background:white;
`

const MainContainer = ({children}) => (
    <>
        <Container>
            <Sidebar/>
            {children}
        </Container>
    </>
);


export default MainContainer;