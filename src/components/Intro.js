import Typical from "react-typical";
import styled from "styled-components";

const IntroWrapper = styled.div`
  margin: 100px;
  font-size: 6rem;
  display: flex;
  justify-content: flex-start;
  width: 600px;
  height: 220px;
  font-weight: bold;
`

const Intro = () => (
    <IntroWrapper>
        <Typical
            steps={['Cześć! 👋, jestem Mati.\n' +
            '                    Jestem początkującym Fullstack Developerem.', 1000]}
            loop={Infinity}
            wrapper="p"
        />
    </IntroWrapper>
);

export default Intro;
