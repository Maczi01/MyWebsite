import MainContainer from "../components/MainContainer";
import Intro from "../components/Intro";
import IntroLinks from "../components/IntroLinks";
import styled from "styled-components";
import me from '../assets/me.png';

const HomeWrapper = styled.div`
     width: 80vw; 
     height:100vh;       
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


const HomeContent = () => (
    <MainContainer>
        <HomeWrapper>
            <Image src={me} alt="authors face"/>
            <IntroWrapper>
                <Intro/>
                <IntroLinks/>
            </IntroWrapper>
        </HomeWrapper>
    </MainContainer>
)

export default HomeContent;