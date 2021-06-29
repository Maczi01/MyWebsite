import React from "react";
import MainContainer from "../components/MainContainer";
import styled from "styled-components";
import Title from "../components/Title";
import ProjectsList from "../components/ProjectsList";
import AboutText from "../components/AboutText";

const ProjectsText = styled.p`
  display: flex;
  padding: 10px;
  //margin: 20px;
  justify-content: center;
`;

const ProjectsContent = () => (
    <MainContainer>
        <Title>
            Lorem Ipsum
        </Title>
        <AboutText>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum."
        </AboutText>
        <ProjectsList/>
    </MainContainer>
);

export default ProjectsContent;