import styled from "styled-components";
// import Typewriter from 'typewriter-effect';
import React from "react";
import TypeWriterEffect from 'react-typewriter-effect';


const IntroWrapper = styled.div`
  margin: 50px 100px 0 40px;
  font-size: 3rem;
  display: flex;
  justify-content: flex-start;
  width: 600px;
  height: 220px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.yellow};
  text-shadow: 
    0 0 0.125em ${({theme}) => theme.colors.gray},
    0 0 0.250em ${({theme}) => theme.colors.yellow},
    0 0 0.5em ${({theme}) => theme.colors.yellow},
    0 0 0.75em ${({theme}) => theme.colors.yellow},
    0 0 1em ${({theme}) => theme.colors.yellow}
`


const Intro = () => (
    <IntroWrapper>
        <TypeWriterEffect
            startDelay={100}
            cursorColor='#FFDF6C'
            text='Cześć! Jestem Mati.
                Jestem początkującym Fullstack Developerem.'
            typeSpeed={100}
            loop={false}
            nextTextDelay={2000}
            hideCursorAfterText="true"
        />
    </IntroWrapper>
);

export default Intro;
