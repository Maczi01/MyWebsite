import styled from "styled-components";

const AboutText = styled.p`
  display: flex;
  padding: 10px;
  margin: 20px;
  justify-content: center;
  color: ${({theme}) => theme.colors.yellow};
`;

export default AboutText;