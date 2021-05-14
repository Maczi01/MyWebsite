import Typical from "react-typical";
import styled from "styled-components";
import {Link} from "react-router-dom";

const IntroWrapper = styled.div`
  //margin: 100px;
  display: flex;
  flex-direction: row;
  //width: 150px;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  color: black;
  width: 6em;
  height: 3em;
  display: inline-block;
  text-transform: uppercase;
  //padding: 4px 5px;
  font-weight: 600;
  font-size: 14px; 
            &::after {
                content: '/';
                color: ${({theme}) => theme.colors.lightgray};
                font-weight: 400;
            }
            
            &::before {
                margin-right: 10px;
            }

            &::after {
                margin-left: 10px;
            }
            
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
