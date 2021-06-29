import MainContainer from "../components/MainContainer";
import styled from "styled-components";
import Skills from "../components/SkillsContainer";
import PageTransitioning from "../components/PageTransitioning";
import React from "react";

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
            {/*<HomeWrapper>*/}
            {/*    <Image src={me} alt="authors face"/>*/}
            {/*    /!*<IntroWrapper>*!/*/}
            {/*    /!*    <Intro/>*!/*/}
            {/*    /!*    <IntroLinks/>*!/*/}
            {/*    /!*</IntroWrapper>*!/*/}
            {/*</HomeWrapper>*/}

            <HomeTitle>
                Lorem ipsum
            </HomeTitle>
            <HomeText>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </HomeText>
            <HomeTitle>
                Lorem ipsum
            </HomeTitle>
            <Skills/>
        </MainContainer>
    </>
)

export default HomeContent;