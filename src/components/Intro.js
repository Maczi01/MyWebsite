import Typical from "react-typical";
import styled from "styled-components";
import Typewriter from 'typewriter-effect/dist/core';

const IntroWrapper = styled.div`
  margin: 100px;
  font-size: 6rem;
  display: flex;
  justify-content: flex-start;
  width: 600px;
  height: 220px;
  font-weight: bold;
  
    color: ${({theme})=> theme.colors.yellow};
    
  text-shadow:
    0 0 5px ${({theme})=> theme.colors.gray},
    0 0 10px currentColor,
    0 0 20px currentColor,
    0 0 40px currentColor,
    0 0 80px currentColor,
    0 0 90px currentColor,
    0 0 100px currentColor,
    0 0 110px currentColor;
`

const Intro = () => (
    <IntroWrapper>
        <Typewriter

        />
        {/*<Typical*/}
        {/*    steps={['Cześć! 👋, jestem Mati.\n' +*/}
        {/*    '                    Jestem początkującym Fullstack Developerem.', 1000]}*/}
        {/*    loop={1}*/}
        {/*    wrapper="p"*/}
        {/*/>*/}
    </IntroWrapper>
);

export default Intro;
