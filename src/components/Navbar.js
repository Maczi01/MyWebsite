import styled from "styled-components";
import {NavLink} from "react-router-dom";
import uk from '../assets/flags/uk.svg'
import ie from '../assets/flags/ie.svg'
import pl from '../assets/flags/pl.svg'

const NavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 70px;
  margin: 0 auto;
  margin-bottom: 20px;
  transition: all 0.5s linear;
  background-color: ${({theme}) => theme.colors.gray};;
`;

const StyledNavLink = styled(NavLink)`
  font-size: 1.5rem;
  display: inline-block;
  width: 100px;
  margin: 1em;
  cursor: pointer;
  text-decoration: none;
  color:  ${({theme}) => theme.colors.yellow};
  border:  ${({theme}) => theme.colors.yellow} 0.125em solid;
  padding: 0.25em 1em;
  border-radius: 0.25em;
  text-align: center;
  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor;
  box-shadow: inset 0 0 0.5em 0  ${({theme}) => theme.colors.yellow}, 0 0 0.5em 0  ${({theme}) => theme.colors.yellow};
  position: relative;
  transition: background-color 100ms linear;

  :before{
  pointer-events: none;
  content: "";
  position: absolute;
  background:  ${({theme}) => theme.colors.yellow};
  top: 120%;
  left: 0;
  width: 100%;
  height: 100%;
  transform: perspective(1em) rotateX(40deg) scale(1, 0.35);
  filter: blur(1em);
  opacity: 0.7;
  }

  :after{
    content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 0 2em 0.5em v ${({theme}) => theme.colors.yellow};
  opacity: 0;
  background-color:  ${({theme}) => theme.colors.yellow};
  z-index: -1;
  transition: opacity 100ms linear;
  }

  :hover, :focus{
    background:  ${({theme}) => theme.colors.yellow};
    color: ${({theme}) => theme.colors.gray};
    text-shadow: none;
  }

  :hover::after, :focus::after{
    opacity: 1;
  }

  :hover::before, :focus::before{
    opacity: 1;
  }
  


  // text-decoration: none;
  // text-align: center;
  // color: black;
  // padding: 10px;
  // width: 180px;
  //    &.active {
  //     background-color: ${({theme}) => theme.colors.yellow};
  //     width: 180px;
  //     border-radius: 45px;
  //   }
`;

const s = styled.button`
  display: block;
  width: 60px;
  height: 60px;
  border-radius: 20px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 50% 50%;
  border: none;
  &.active {
    background-color: white;
  }
`;

const StyledFlag = styled.img`
    justify-content: center;
    width: 40px;
    height: 40px;
    margin-left: 10px;
    margin-right: 10px;
`;

const Navbar = () => (
    <NavbarWrapper>
        <StyledNavLink exact to="/">Główna</StyledNavLink><br/>
        <StyledNavLink to="/about" activeclass="active">Item 1 </StyledNavLink><br/>
        <StyledNavLink to="/projects" activeclass="active">Item 2</StyledNavLink><br/>
        <StyledNavLink to="/resume" activeclass="active">Item 3</StyledNavLink><br/>
        <StyledNavLink to="/contact" activeclass="active">Item 4</StyledNavLink><br/>
        <StyledFlag src={uk}/>
        {/*<StyledFlag src={ie}/>*/}
        <StyledFlag src={pl}/>
    </NavbarWrapper>
);


export default Navbar;
