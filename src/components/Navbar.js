import styled from "styled-components";
import {NavLink} from "react-router-dom";

const NavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  height: 70px;
  background-color: yellow;
  margin-bottom: 20px;
  transition: all 0.5s linear;
`

const Navbar = () => (

    <NavbarWrapper>
        <NavLink to="/">O mnie</NavLink><br/>
        <NavLink to="/resume">Napisz do mnie</NavLink><br/>
        <NavLink to="/projects">Projekty</NavLink><br/>
    </NavbarWrapper>
);

export default Navbar;
