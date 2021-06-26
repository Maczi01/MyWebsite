import styled from "styled-components";
import CountUp from "react-countup";
import {motion} from "framer-motion";

const HomeTitle = styled.div`
    justify-content: flex-start;
    font-size: 5rem;
    display: flex;
    //padding: 10px;
    //margin: 20px;
    font-weight: bold;
    color: black
    // text-shadow: 
    // 0 0 0.125em ${({theme}) => theme.colors.gray},
    // 0 0 0.250em ${({theme}) => theme.colors.yellow},
    // 0 0 0.5em ${({theme}) => theme.colors.yellow},
    // 0 0 0.75em ${({theme}) => theme.colors.yellow},
    // 0 0 1em ${({theme}) => theme.colors.yellow};
`;

const HomeText = styled.p`
  display: flex;
  padding: 10px;
  margin: 20px;
  justify-content: center;
  color: ${({theme}) => theme.colors.yellow};
  width: 40vw;
`;

const Container = styled.div`
     //width: 100vw; 
     //height:100vh;       
     //display: flex;
     //flex-direction: column;
     //margin: 0 auto;
     //background: yellow;
     //  position: relative;

    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    display: grid;
    place-content: center;
     background: yellow;

`;

const Center = styled.div`
    width: 50%;
  height: 50%;
  overflow: auto;
  margin: auto;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
     background: yellow;
     //background:white;
`

const LoadingPage = ({counter}) => (
    <Container>
        <HomeTitle>
            <Center>
                {counter}
            </Center>
        </HomeTitle>
    </Container>
)

export default LoadingPage;