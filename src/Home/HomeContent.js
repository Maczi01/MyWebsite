import MainContainer from "../components/MainContainer";
import Intro from "../components/Intro";
import IntroLinks from "../components/IntroLinks";
import styled from "styled-components";
import me from '../assets/me.png';
import Title from "../components/Title";
import AboutText from "../components/AboutText";
import Skills from "../components/SkillsContainer";
import PageTransitioning from "../components/PageTransitioning";

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

const HomeContent = () => (
   <>
       <PageTransitioning/>
       <MainContainer>
           <HomeWrapper>
               <Image src={me} alt="authors face"/>
               {/*<IntroWrapper>*/}
               {/*    <Intro/>*/}
               {/*    <IntroLinks/>*/}
               {/*</IntroWrapper>*/}
           </HomeWrapper>

           <HomeTitle>
               Cześć!
           </HomeTitle>
           <HomeText>
               Nazywam się Mateusz, od kilku lat pracuje jako konstruktor w branży mechanicznej. Ukończyłem
               Inżynierię mechaniczną na Politechnice Wrocławskiej z tytułem magistra. Od kilku lat interesuje się
               programowaniem, ze szczególnym uwzględnieniem projektowania aplikacji internetowych. W obszarze
               moich zainteresowań są zagadnienia związane z frontendem - głównie React, a także z backednem
               (Java i Spring).
           </HomeText>
           <HomeTitle>
               Umiejętności
           </HomeTitle>
           <Skills/>
       </MainContainer>
       </>
)

export default HomeContent;