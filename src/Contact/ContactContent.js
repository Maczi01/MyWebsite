import styled from "styled-components";
import MainContainer from "../components/MainContainer";
import emailjs from 'emailjs-com';
import {send} from 'emailjs-com';
import {useEffect, useState} from 'react';


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


const ContactContent = () => {


    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isReadyToSubmit, setIsReadyToSubmit] = useState(false);
    const [submitInfoMessage, setSubmitInfoMessage] = useState("");

    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        reply_to: '',
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: ""
    });
    const resetFields = () => {
        setToSend({
            from_name: '',
            message: '',
            reply_to: '',
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
        emailjs.send(SERVICE_ID, TEMPLATE_ID, toSend, USER_ID)
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
                        Skontaktuj się ze mną
                    </strong>
                </h2>
                <p>
                    Pytania, współpraca, oferta pracy, a może luźna pogawędka o ostatnim meczu? Pisz śmiało, odpisuje
                    na każdy email
                </p>

                <form onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text"
                           name="name"
                           onChange={handleChange}

                           placeholder="Jak masz na imię?"
                    />
                    <input type="email"
                           name="email"
                           onChange={handleChange}
                           placeholder="Podaj swój adres email"
                    />

                    <label>Email</label>
                    <textarea
                        type="text"
                        name="email"
                        onChange={handleChange}

                        placeholder="Podaj swoją wiadomość!"
                    />
                    <input type="submit"
                           isSubmitted={isSubmitted}
                           value="Send"/>
                </form>
            </MainContainer>
        </>
    );
}
export default ContactContent;