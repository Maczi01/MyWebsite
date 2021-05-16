import styled from "styled-components";
import MainContainer from "../components/MainContainer";

const FormWrapper = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: 0 auto;
      width: 50vw;
`;

const StyledLabel = styled.label`
      background-color: blue;
      color: red;
      text-align: center;
      justify-content: center;  
      transition: 0.2s ease-out all;
      font-size: 18px;
      height: 60px;
      width: 300px;
      margin: 6px;
      display: flex;
      text-decoration: none;
      align-items: center;
`;

const FormItem = styled.div`
      width: 100%;
      display: flex;
`;

const StyledInput = styled.input`
    display: block;
    appearance: none;
    outline: 0;
    border: 1px solid white;
    width: 300px;
    border-radius: 3px;
    margin: 6px;
    text-align: center;
    font-size: 18px;
    color: black;
    transition-duration: 0.25s;
    font-weight: 300;
    background-color: greenyellow;
`;
const ContactContent = () => (
    <>
        <MainContainer>
            <h2>
                <strong>
                    Skontaktuj się ze mną
                </strong>
            </h2>
            <p>
                Pytania, współpraca, oferta pracy, a może luźna pogawędka o ostatnim meczu? Pisz śmiało, odpisuje
                wszystkim
            </p>

            <form autoComplete="off">
                <FormItem>
                    <StyledLabel htmlFor="currentQuantity">
                        <p>p</p>
                    </StyledLabel>
                    <StyledInput
                    >
                    </StyledInput>
                </FormItem>

                <FormItem>
                    <button> wyslij maila</button>
                </FormItem>

                <button
                >ok
                </button>
            </form>
        </MainContainer>
    </>
)

export default ContactContent;