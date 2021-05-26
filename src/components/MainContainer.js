import styled from "styled-components";

const Container = styled.div`
     width: 80vw;        
     display: flex;
     flex-direction: column;
     margin: 0 auto;
     // background:  ${({theme}) => theme.colors.gray};
         background-color: transparent;

`

const MainContainer = ({children}) => (
    <Container>
        {children}
    </Container>
);


export default MainContainer;