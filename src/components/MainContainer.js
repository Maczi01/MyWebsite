import styled from "styled-components";

const Container = styled.div`
     width: 80vw;        
     display: flex;
     flex-direction: column;
     margin: 0 auto;

`

const MainContainer = ({children}) => (
    <Container>
        {children}
    </Container>
);


export default MainContainer;