import styled from "styled-components";
import wheatherapp from '../assets/wheatherapp.png'

const ProjectItemWrapper = styled.div`
  background-color: ${({theme}) => theme.colors.gray};
  box-shadow: 0 6px 16px rgba(20, 22, 43, 0.2);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  //border-radius: 15px;
  min-height: 20rem;
`

const ProjectThumbnail = styled.img`
     position: absolute;
     max-width: 100%;
     width: 100%;
     height: auto;
     top: 50%;     
     left: 50%;
     transform: translate( -50%, -50%);
`;

const ProjectTitle = styled.h3`
  font-size: 4rem;
  display: flex;
  color: ${({theme}) => theme.colors.white};
  justify-content: center;
  font-weight: bold;
  margin-bottom: auto; 
  position: absolute;
  bottom: 0;
  left: 50%;
  text-shadow: 0 0 8px #4927ff;
`;

const Image = styled.img`
     position: absolute;
     max-width: 100%;
     width: 100%;
     height: auto;
     top: 50%;     
     left: 50%;
     transform: translate( -50%, -50%);
`;

const ProjectItem = ({image, title}) => (
    <ProjectItemWrapper>
        <ProjectThumbnail src={image}/>
        {/*<ProjectTitle>{title}</ProjectTitle>*/}
    </ProjectItemWrapper>
);

export default ProjectItem;