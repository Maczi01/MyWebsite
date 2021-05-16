import MainContainer from "../components/MainContainer";
import styled from "styled-components";

const FormWrapper = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: 0 auto;
      width: 50vw;
      @media (max-width: ${({theme}) => theme.mobile}) {
        width: 100vw;
     }
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

const Select = styled.select`
      width: 300px;
      font-size: 18px;
      display: flex;
      text-decoration: none;
      justify-content: center;
      text-align: center;
      align-items: center;
      height: 60px;
      padding-left: 5px;
      border: none;
      margin: 6px;
      text-align-last:center;
      outline: none;
      color: black;
      background-color: red;
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
    background-color: ${({theme}) => theme.colors.gray};
    @media (max-width: ${({theme}) => theme.mobile}) {
       height: 50px;
    }
  }
`;

const ResumeContent = () => (
    <>
        <MainContainer>
            <h2>
                <strong>
                    Pobierz moje CV
                </strong>
            </h2>
            <p>
                <strong>
                    Jeśli chcesz pobrać moje CV, zostaw proszę swoje dane. Nie chcę, by moje CV przemieszczało się
                    swobodnie po internecie. Zostaw swoje dane, CV, zostanie przesłane na Twój adres email.
                </strong>

                <form autoComplete="off">
                    <FormItem>
                        <StyledLabel htmlFor="currentQuantity">
                            <p >p</p>
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


            </p>
        </MainContainer>
    </>
)

export default ResumeContent;