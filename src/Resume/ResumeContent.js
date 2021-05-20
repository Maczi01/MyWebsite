import MainContainer from "../components/MainContainer";
import styled from "styled-components";
import {send} from "emailjs-com";
import {useState} from 'react';

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
                <h2>
                    <strong>
                        Pobierz moje CV
                    </strong>
                </h2>
                <p>
                    Potrzebujesz moje CV? Oczywiście możesz je pobrać. Nie chcę jednak, by moje dane latały gdzieś po internecie.
                    Jeśli pobierasz moje CV, pozostaw prosze swoje dane.
                </p>
                <form onSubmit={sendEmail}>
                    <label>Name</label>
                    <input
                        type='text'
                        name='from_name'
                        placeholder='Jak Ci na imie?'
                        value={toSend.from_name}
                        onChange={handleChange}
                    />
                    <input
                        type='email'
                        name='to_name'
                        placeholder='Twoj mail?'
                        value={toSend.to_name}
                        onChange={handleChange}
                    />


                    <select
                        name='goal'
                        value={toSend.goal}
                        onChange={handleChange}
                    >
                        <option label="just check" value="just check"/>
                        <option label="I have job for you" value="I have job for you"/>
                        <option label="photo" value="photo"/>
                    </select>
                    <label>Email</label>
                    <input type="submit"
                        // isSubmitted={isSubmitted}
                           value="Pobieram Twoje CV"/>
                </form>
            </MainContainer>
        </>
    );
}
export default ResumeContent;