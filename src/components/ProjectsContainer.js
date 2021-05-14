import styled from "styled-components";

const ProjectsContainerWrapper = styled.div`
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
  row-gap: 1.5rem;
  border-radius: 8px;
  list-style-type: none;
`

const ProjectsContainer = () => (
  <>
      <ProjectItem/>
    </>
);

export default ProjectsContainer;