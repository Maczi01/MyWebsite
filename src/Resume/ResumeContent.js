import MainContainer from "../components/MainContainer";
import styled, {css} from "styled-components";
import {send} from "emailjs-com";
import React, {useState} from 'react';
import Title from "../components/Title";
import {TextReveal} from "../components/ContentReveal";
import AboutText from "../components/AboutText";
import StyledSubmit from "../components/form/StyledSubmit";
import StyledLabel from "../components/form/StyledLabel";
import StyledInput from "../components/form/StyledInput";
import StyledOption from "../components/form/StyledOption";
import StyledSelect from "../components/form/StyledSelect";
import Form from "../components/form/Form";

// const FormWrapper = styled.form`
//     position: relative;
//     max-width: 600px;
//     margin: 0 auto;
// `;
//
// const InputsWrapper = styled.div`
//     position: relative;
// `;

// const SERVICE_ID = "service_qzsarwb";
// const TEMPLATE_ID = process.env.REACT_APP_FORM_TEMPLATE_KEY;
// const USER_ID = process.env.REACT_APP_FORM_USER_KEY;

const ResumeContent = () => {
    //
    // const [isSubmitted, setIsSubmitted] = useState(false);
    // const [isReadyToSubmit, setIsReadyToSubmit] = useState(false);
    // const [submitInfoMessage, setSubmitInfoMessage] = useState("");
    //
    // const [toSend, setToSend] = useState({
    //     from_name: '',
    //     message: '',
    //     to_name: '',
    //     goal: 'check'
    // });
    //
    // const [errors, setErrors] = useState({
    //     name: "",
    //     email: "",
    //     message: ""
    // });
    // const resetFields = () => {
    //     setToSend({
    //         from_name: '',
    //         to_name: '',
    //         goal: ''
    //     });
    //
    //     setErrors({
    //         name: "",
    //         email: "",
    //         message: ""
    //     });
    // };
    //
    //
    // const handleChange = (e) => {
    //     setToSend({...toSend, [e.target.name]: e.target.value});
    // };
    //
    // const sendEmail = (e) => {
    //     e.preventDefault();
    //     send(SERVICE_ID, TEMPLATE_ID, toSend, USER_ID)
    //         .then((response) => {
    //             setSubmitInfoMessage("Poszło! Odezwę się najszybciej jak to możliwe!");
    //             setIsSubmitted(true);
    //             setIsReadyToSubmit(false);
    //             resetFields();
    //             console.log('sended');
    //             console.log(response.status);
    //         }, (error) => {
    //             console.log('FAILED...', error);
    //             setSubmitInfoMessage("Something wrong, use my email. :(");
    //             setIsReadyToSubmit(false);
    //         });
    // };


    return (
        <>
            <MainContainer>
                <Title>
                    Pobierz moje CV
                </Title>
                <AboutText>
                    Potrzebujesz moje CV? Oczywiście możesz je pobrać. Nie chcę jednak, by moje dane latały gdzieś
                    po internecie.
                    Jeśli pobierasz moje CV, pozostaw prosze swoje dane.
                </AboutText>
                <Form/>
            </MainContainer>
        </>
    );
};

export default ResumeContent;