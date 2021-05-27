import styled from "styled-components";
import SkillsTable from "./SkillsTable";

const SectionContainer = styled.section`
    padding: ${(props) => (props.project ? "4vh 0" : "4vh 15px")};
    max-width: ${(props) => (props.project ? "1920px" : "1800px")};
    margin: 0 auto;
`;

const Skills = styled.div`
      <SkillsTable>
      
      </SkillsTable>  
`;

export default Skills;
