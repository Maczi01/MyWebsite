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
            Projekty
        </Title>
        <AboutText>
            Poniżej znajduje się lista moich projektów. Są to głównie projekty niekomercyjne, wykonane w czasie
            wolnym. Projekty posiadają odnośniki do repozytorium z kodem i wersji live demo.
        </AboutText>
        <ProjectsList/>
    </MainContainer>
);

export default ProjectsContent;