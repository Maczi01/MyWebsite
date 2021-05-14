import styled from "styled-components";
import {NavLink} from "react-router-dom";

const NavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 70px;
  background-color: yellow;
  margin-bottom: 20px;
  transition: all 0.5s linear;
`

const StyledNavLink = styled(NavLink)`
  padding: 10px;
  background-color: chartreuse;
  color: black;
  list-style: none;
`

const Navbar = () => (

    <NavbarWrapper>
        <StyledNavLink to="/">Główna</StyledNavLink><br/>
        <StyledNavLink to="/about">O mnie </StyledNavLink><br/>
        <StyledNavLink to="/resume">Pobierz moje CV</StyledNavLink><br/>
        <StyledNavLink to="/contact">Napisz do mnie</StyledNavLink><br/>
        <StyledNavLink to="/projects">Projekty</StyledNavLink><br/>
    </NavbarWrapper>
);

export default Navbar;
