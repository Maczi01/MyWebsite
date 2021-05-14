import styled from "styled-components";
import {NavLink} from "react-router-dom";

const NavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 70px;
  margin-bottom: 20px;
  transition: all 0.5s linear;
`

const StyledNavLink = styled(NavLink)`
  padding: 10px;
  background-color: chartreuse;
  text-align: center;
  color: black;
  width: 180px;
  list-style: none;
     &.active {
      background-color: ${({theme}) => theme.colors.yellow};
      width: 180px;
      border-radius: 45px;
    }
`

const Navbar = () => (

    <NavbarWrapper>
        <StyledNavLink exact to="/" >Główna</StyledNavLink ><br/>
        <StyledNavLink to="/about" activeclass="active">O mnie </StyledNavLink ><br/>
        <StyledNavLink to="/resume" activeclass="active">Pobierz moje CV</StyledNavLink><br/>
        <StyledNavLink to="/contact" activeclass="active">Napisz do mnie</StyledNavLink><br/>
        <StyledNavLink to="/projects" activeclass="active">Projekty</StyledNavLink><br/>
    </NavbarWrapper>
);

export default Navbar;
