import styled from "styled-components";

const StyledLabel = styled.label`
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 14px;
    color: ${({theme}) => theme.colors.yellow} 
`;

export default StyledLabel;