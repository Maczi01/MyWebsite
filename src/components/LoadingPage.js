import styled from "styled-components";
import CountUp from "react-countup";
import {motion} from "framer-motion";

const HomeWrapper = styled.div`
     width: 80vw; 
     min-height:100vh;       
     display: flex;
     flex-direction: row;
     margin: 0 auto;
`;

const IntroWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Image = styled.img`
    justify-content: center;
    margin: 50px 100px 0 40px;
    width: 400px;
    height: 400px;
    transition: all .6s ease 0s;
`;

const HomeTitle = styled.div`
    justify-content: flex-start;
    font-size: 5rem;
    display: flex;
    padding: 10px;
    margin: 20px;
    font-weight: bold;
    color: ${({theme}) => theme.colors.yellow};
    text-shadow: 
    0 0 0.125em ${({theme}) => theme.colors.gray},
    0 0 0.250em ${({theme}) => theme.colors.yellow},
    0 0 0.5em ${({theme}) => theme.colors.yellow},
    0 0 0.75em ${({theme}) => theme.colors.yellow},
    0 0 1em ${({theme}) => theme.colors.yellow};
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
     width: 80vw; 
     height:100vh;       
     display: flex;
     flex-direction: column;
     margin: 0 auto;
     background: green
     //background:white;
`

const LoadingPage = () => (
    <Container>
        {/*<motion*/}
        {/*    exit={{y: -1000}}*/}
        {/*>*/}
            <HomeTitle>
                <CountUp
                    end={100}
                    duration={5}
                />
            </HomeTitle>
        {/*</motion>*/}
    </Container>
)

export default LoadingPage;