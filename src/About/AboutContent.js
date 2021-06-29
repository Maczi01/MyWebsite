import MainContainer from "../components/MainContainer";
import Title from "../components/Title";
import styled from "styled-components";
import AboutText from "../components/AboutText";

const AboutTitle = styled.h3`
  font-size: 4rem;
  display: flex;
  padding: 10px;
  margin: 20px;
  justify-content: center;
  font-weight: bold;
  color: ${({theme}) => theme.colors.yellow};
`;


const AboutContent = () => (
    <MainContainer>
        <Title>
            Lorem ipsum
        </Title>
        <AboutText>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum."
        </AboutText>

    </MainContainer>
)

export default AboutContent;