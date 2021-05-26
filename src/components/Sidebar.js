import styled from 'styled-components';

const StyledWrapper = styled.nav`
      position: fixed;
      left: 0;
      top: 0;
      padding: 25px 0;
      width: 150px;
      height: 100vh;
      background-color: ${({theme}) => theme.colors.yellow};
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
`;

const StyledLogoLink = styled(NavLink)`
    display: block;
    width: 67px;
    height: 67px;
    background-image: url(${logoIcon});
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 80%;
    border: none;
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
    <StyledWrapper >
        <StyledLogoLink to="/" />
        <StyledLinksList>
            <li>
                <ButtonIcon as={NavLink} to="/notes" icon={penIcon} activeclass="active" />
            </li>
            <li>
                <ButtonIcon as={NavLink} to="/twitters"  activeclass="active" />
            </li>
            <li>
                <ButtonIcon as={NavLink} to="/articles"  activeclass="active" />
            </li>
        </StyledLinksList>
        <StyledLogoutButton as={NavLink} to="/login" icon={logoutIcon} />
    </StyledWrapper>
);