import styled from "styled-components";

const StyledTextarea = styled.textarea`
    display: block;
    width: 100%;
    background-color: ${({theme}) => theme.colors.gray};
    color: ${({theme}) => theme.colors.yellow};;
    border:1px solid ${({theme}) => theme.colors.yellow};
    padding: 15px;
    outline: none;
    margin: 4px 0 24px;
    font-size: 16px;
    opacity: 1;
    transition: opacity .6s .1s ease-in-out;
    min-height: 25vh;
`;

export default StyledTextarea;