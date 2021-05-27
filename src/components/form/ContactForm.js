import styled from "styled-components";
import StyledLabel from "./StyledLabel";
import StyledInput from "./StyledInput";
import StyledSelect from "./StyledSelect";
import StyledOption from "./StyledOption";
import StyledSubmit from "./StyledSubmit";
import {send} from "emailjs-com";
import React, {useState} from 'react';
import InputsWrapper from "./InputsWrapper";
import FormWrapper from "./FormWrapper";
import StyledTextarea from "./StyledTextarea";

const ContactForm = () => {

    const SERVICE_ID = "service_qzsarwb";
    const TEMPLATE_ID = process.env.REACT_APP_FORM_TEMPLATE_KEY;
    const USER_ID = process.env.REACT_APP_FORM_USER_KEY;

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isReadyToSubmit, setIsReadyToSubmit] = useState(false);
    const [submitInfoMessage, setSubmitInfoMessage] = useState("");

    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        to_name: '',
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
            to_name: '',
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
        <FormWrapper>
            <InputsWrapper>
                <StyledLabel htmlFor="from_name">
                    <p data-scroll delay={.3} transparent>
                        Name:
                    </p>
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

            <InputsWrapper>
                <StyledLabel htmlFor="from_name">
                    <p data-scroll delay={.3} transparent>
                        Email:
                    </p>
                </StyledLabel>
                <StyledInput
                    type='email'
                    name='to_name'
                    placeholder='Twoj mail?'
                    value={toSend.to_name}
                    onChange={handleChange}
                    data-scroll
                />
            </InputsWrapper>

            <InputsWrapper>
                <StyledLabel htmlFor="from_name">
                    <p data-scroll delay={.3} transparent>
                        Wiadomość:
                    </p>
                </StyledLabel>
                <StyledTextarea
                    type='text'
                    name='message'
                    placeholder='Wiadomość'
                    value={toSend.message}
                    onChange={handleChange}
                />
            </InputsWrapper>
            <StyledSubmit type="submit"
                // isSubmitted={isSubmitted}
                          value="Pobieram Twoje CV!">
                Wyślij wiadomość
            </StyledSubmit>
        </FormWrapper>

    );
}
export default ContactForm;
