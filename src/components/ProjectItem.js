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
  border-radius: 15px;
  min-height: 30rem;
`

const ProjectThumbnail = styled.img`
    justify-content: center;
    margin: 0;
    align-items: center;
    //width: 80%;
    //height: 150px;
    border-radius: 8px;
    transition: all .6s ease 0s; 
`
// const ProjectDescriptionContainer = styled.div`
//   display: flex;
//   flex-direction: column;
// `
const ProjectTitle = styled.h3`
  font-size: 4rem;
  display: flex;
  padding: 10px;
  margin: 20px;
  color: ${({theme}) => theme.colors.white};
  justify-content: center;
  font-weight: bold;
  margin-bottom: auto; 
  position: absolute;
  bottom: 0;
  left: 50%
`
// const ProjectDescription = styled.p`
//   display: flex;
//   padding: 10px;
//   margin: 20px;
//   justify-content: center;
// `

const ProjectItem = ({image, title}) => (
    <ProjectItemWrapper>
        <ProjectThumbnail src={image}/>
        <ProjectTitle>{title}</ProjectTitle>
    </ProjectItemWrapper>
);

export default ProjectItem;