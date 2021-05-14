import styled from "styled-components";
import ProjectItem from "./ProjectItem";
import wheatherapp from '../assets/wheatherapp.png'
import attentioncontrol from '../assets/attentioncontrol.png'
import library from '../assets/library.png'
import portfolio from '../assets/portfolio.png'
import shoppinglist from '../assets/shoppinglist.png'
import equipymanager from '../assets/equipymanager.png'

const ProjectsContainerWrapper = styled.div`
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
  row-gap: 1.5rem;
  list-style-type: none;
`

const ProjectsContainer = () => (
    <ProjectsContainerWrapper>
        <ProjectItem image={wheatherapp} title={'Wheather app'}/>
        <ProjectItem image={attentioncontrol} title={'Attention control'}/>
        <ProjectItem image={library} title={'Library'}/>
        <ProjectItem image={portfolio} title={'Portfolio'}/>
        <ProjectItem image={shoppinglist} title={'Shopping list'}/>
        <ProjectItem image={equipymanager} title={'Equipy manager'}/>
    </ProjectsContainerWrapper>
);

export default ProjectsContainer;