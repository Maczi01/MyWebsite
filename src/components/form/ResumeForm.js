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

const ResumeForm = () => {


    const SERVICE_ID = "service_qzsarwb";
    const TEMPLATE_ID = process.env.REACT_APP_FORM_TEMPLATE_KEY;
    const USER_ID = process.env.REACT_APP_FORM_USER_KEY;


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
    };


    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isReadyToSubmit, setIsReadyToSubmit] = useState(false);
    const [submitInfoMessage, setSubmitInfoMessage] = useState("");

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
                        Cel:
                    </p>
                </StyledLabel>
                <StyledSelect>
                    <StyledOption label="just check" value="just check"/>
                    <StyledOption label="I have job for you" value="I have job for you"/>
                    <StyledOption label="I want test your form" value="I want test your form"/>
                </StyledSelect>
            </InputsWrapper>
            <StyledSubmit type="submit"
                // isSubmitted={isSubmitted}
                          value="Pobieram Twoje CV!">
                Item 7
            </StyledSubmit>
        </FormWrapper>

    );
}
export default ResumeForm;
