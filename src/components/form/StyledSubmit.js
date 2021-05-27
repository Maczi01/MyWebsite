import styled from "styled-components";

const StyledSubmit = styled.button`
    color: ${({theme}) => theme.colors.gray};
    background-color: ${({theme}) => theme.colors.yellow}; 
    text-transform: uppercase;
    font-weight: 600;
    margin: 4px 0 24px;
    padding: 15px;
    width: 100%;
    cursor: pointer;
    border: 1px solid ${({theme}) => theme.colors.yellow};
    transition: background-color .4s, opacity .4s, color .4s;
`;

export default StyledSubmit;