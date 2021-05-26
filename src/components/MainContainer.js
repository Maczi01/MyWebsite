import styled from "styled-components";
import Sidebar from "./Sidebar";
import React from "react";

const Container = styled.div`
     width: 80vw; 
     min-height:100vh;       
     display: flex;
     flex-direction: column;
     margin: 0 auto;
     // background:  ${({theme}) => theme.colors.gray};
         background-color: transparent;

`

const MainContainer = ({children}) => (
    <Container>
        <Sidebar/>
        {children}
    </Container>
);


export default MainContainer;