import styled from "styled-components";
import TypeWriterEffect from 'react-typewriter-effect';

const TitleWrapper = styled.div`
  font-size: 5rem;
  display: flex;
  padding: 10px;
  margin: 20px;
  justify-content: center;
  font-weight: bold;
  color: ${({theme})=> theme.colors.yellow};
  // text-shadow: 
  //   0 0 0.125em ${({theme}) => theme.colors.gray},
  //   0 0 0.250em ${({theme}) => theme.colors.yellow},
  //   0 0 0.5em ${({theme}) => theme.colors.yellow},
  //   0 0 0.75em ${({theme}) => theme.colors.yellow},
  //   0 0 1em ${({theme}) => theme.colors.yellow};
`

const Title = ({children}) => (
    <TitleWrapper>
        <TypeWriterEffect
            startDelay={100}
            cursorColor='#FFDF6C'
            text={children}
            typeSpeed={100}
            loop={false}
            nextTextDelay={2000}
            hideCursorAfterText="true"
        />
    </TitleWrapper>
);

export default Title;




