import MainContainer from "../components/MainContainer";
import styled, {css} from "styled-components";
import {send} from "emailjs-com";
import {useState} from 'react';
import Title from "../components/Title";
import { TextReveal } from "../components/ContentReveal";

const FormWrapper = styled.form`
    position: relative;
    max-width: 60vw;
    margin: 0 auto;
`;

const InputsWrapper = styled.div`
    position: relative;
`;

const StyledLabel = styled.label`
      background-color: black;
      color: yellow;
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

// const StyledInput = styled.input`
//     display: block;
//     appearance: none;
//     outline: 0;
//     border: 1px solid white;
//     width: 300px;
//     border-radius: 3px;
//     margin: 6px;
//     text-align: center;
//     font-size: 18px;
//     color: black;
//     transition-duration: 0.25s;
//     font-weight: 300;
//     background-color: greenyellow;
// `;



const formBase = css`
    display: block;
    width: 100%;
    background-color: ${({theme}) => theme.colors.gray};
    color: ${({theme}) => theme.colors.yellow};;
    border: none;
    padding: 15px;
    outline: none;
    margin: 4px 0 24px;
    font-size: 16px;
    opacity: 0;
    transition: opacity .6s .1s ease-in-out;

    //&.is-inview {
    //    opacity: 1;
    //}
`;

const StyledInput = styled.input`
    ${formBase};
`

const SERVICE_ID = "service_qzsarwb";
const TEMPLATE_ID = process.env.REACT_APP_FORM_TEMPLATE_KEY;
const USER_ID = process.env.REACT_APP_FORM_USER_KEY;

const ResumeContent = () => {


    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isReadyToSubmit, setIsReadyToSubmit] = useState(false);
    const [submitInfoMessage, setSubmitInfoMessage] = useState("");

    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        to_name: '',
        goal: 'check'
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: ""
    });
    const resetFields = () => {
        setToSend({
            from_name: '',
            to_name: '',
            goal: ''
        });

        setErrors({
            name: "",
            email: "",
            message: ""
        });
    };


    const handleChange = (e) => {
        setToSend({...toSend, [e.target.name]: e.target.value});
    };

    const sendEmail = (e) => {
        e.preventDefault();
        send(SERVICE_ID, TEMPLATE_ID, toSend, USER_ID)
            .then((response) => {
                setSubmitInfoMessage("Poszło! Odezwę się najszybciej jak to możliwe!");
                setIsSubmitted(true);
                setIsReadyToSubmit(false);
                resetFields();
                console.log('sended');
                console.log(response.status);
            }, (error) => {
                console.log('FAILED...', error);
                setSubmitInfoMessage("Something wrong, use my email. :(");
                setIsReadyToSubmit(false);
            });
    }


    return (
        <>
        <MainContainer>
            <Title>
                Pobierz moje CV
            </Title>
            <p>
                Potrzebujesz moje CV? Oczywiście możesz je pobrać. Nie chcę jednak, by moje dane latały gdzieś
                po internecie.
                Jeśli pobierasz moje CV, pozostaw prosze swoje dane.
            </p>
            <FormWrapper onSubmit={sendEmail}>
                <InputsWrapper>
                    <StyledLabel htmlFor="from_name">
                        <TextReveal data-scroll delay={.2} transparent>
                            Name:
                        </TextReveal>
                    </StyledLabel>
                    <StyledInput
                        type='text'
                        name='from_name'
                        placeholder='Jak Ci na imie?'
                        value={toSend.from_name}
                        onChange={handleChange}
                        data-scroll
                    />
                </InputsWrapper>
        </FormWrapper>
        </MainContainer>
        </>
    );
}
export default ResumeContent;