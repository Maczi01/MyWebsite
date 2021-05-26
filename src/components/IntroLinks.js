import Typical from "react-typical";
import styled from "styled-components";
import {Link} from "react-router-dom";

const IntroWrapper = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: row;
  //width: 150px;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  color: ${({theme}) => theme.colors.yellow};
  width: 6em;
  height: 3em;
  display: inline-block;
  text-transform: uppercase;
  padding: 4px 5px;
  font-weight: 600;
  font-size: 14px; 
  margin: 10px;   
`
const IntroLinks = () => (
    <IntroWrapper>
        <StyledLink to="/about" activeclass="active">O mnie </StyledLink><br/>
        <StyledLink to="/resume" activeclass="active">CV</StyledLink><br/>
        <StyledLink to="/contact" activeclass="active">Kontakt</StyledLink><br/>
        <StyledLink to="/projects" activeclass="active">Projekty</StyledLink><br/>
    </IntroWrapper>
);

export default IntroLinks;
