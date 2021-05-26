import MainContainer from "../components/MainContainer";
import Intro from "../components/Intro";
import IntroLinks from "../components/IntroLinks";
import styled from "styled-components";

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
    margin: 0;
    width: 150px;
    height: 150px;
    transition: all .6s ease 0s;
`;


const HomeContent = () => (
    <MainContainer>
        <HomeWrapper>
            <IntroWrapper>
                <Intro/>
                <IntroLinks/>
                <Image src={me} alt="authors face"/>
            </IntroWrapper>
        </HomeWrapper>
    </MainContainer>
)

export default HomeContent;