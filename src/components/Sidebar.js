import styled from 'styled-components';
import ButtonIcon from "./ButtonIcon";
import githubico from '../assets/githubico.svg'
import strava from '../assets/strava.svg'
import instaico from '../assets/instaico.svg'
import letter from '../assets/letter.svg'
import linkedin from '../assets/linkedin.svg'
import {NavLink} from "react-router-dom";

const StyledWrapper = styled.nav`
      position: fixed;
      left: 0;
      top: 0;
      padding: 25px 0;
      width: 100px;
      height: 100vh;
      background-color: ${({theme}) => theme.colors.yellow};
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
`;

const StyledLogoLink = styled(NavLink)`
    display: block;
    width: 67px;
    height: 67px;
    background-repeat: no-repeat;
    background-image: url(${letter});

    background-position: 50% 50%;
    background-size: 80%;
    border: none;
    margin-top: 0;
    margin-bottom: 10vh;
`;

const StyledLogoutButton = styled(ButtonIcon)`
    margin-top: auto;
`;

const StyledLinksList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;


const Sidebar = () => (
    <StyledWrapper>
        <StyledLogoLink to="/"/>
        <StyledLinksList>
            <li>
                <ButtonIcon as={NavLink} to="/notes" icon={githubico} activeclass="active"/>
            </li>
            <li>
                <ButtonIcon as={NavLink} to="/twitters" icon={instaico} activeclass="active"/>
            </li>
            <li>
                <ButtonIcon as={NavLink} to="/articles" icon={linkedin} activeclass="active"/>
            </li>
        </StyledLinksList>
        {/*<StyledLogoutButton as={NavLink} to="/login" icon={logoutIcon} />*/}
    </StyledWrapper>
);

export default Sidebar;