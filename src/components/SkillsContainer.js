import styled from "styled-components";
import SkillsTable from "./SkillsTable";
import React from "react";
import { Github } from '@styled-icons/bootstrap/Github';
import { PhoneDesktop } from '@styled-icons/fluentui-system-regular/PhoneDesktop';

import {
    ReactLogo,
    Bootstrap,
    SpringBoot
} from '@styled-icons/boxicons-logos';
import {
    Css3,
    Javascript,
    StyledComponents,
    Sass,
    Wordpress,
    Figma,
    Html5,
    Woo,
    Postman,
    Graphql,
    Docker,
    Mysql
} from '@styled-icons/simple-icons';
import {
    Java} from '@styled-icons/fa-brands/Java'


const SectionContainer = styled.section`
    padding: ${(props) => (props.project ? "4vh 0" : "4vh 15px")};
    max-width: ${(props) => (props.project ? "1920px" : "1800px")};
    margin: 0 auto;
`;

const SkillsItem = styled.li`
    position: relative;
    flex-basis: 29%;
    display: grid;
    place-items: center;
    padding: 15px 0;
`;

const SkillsSvgWrapper = styled.span`
    width: 70%;
    color: ${(props) =>  typeof props.color === 'string' ? props.color : "yellow"};
    transition: color 4s 1.5s;
    overflow: hidden;
`;

const SkillsInfo = styled.span`
    position: relative;
    z-index: 1;
    text-transform: uppercase;
    font-size: clamp(12px, 2.5vw, 20px);
    white-space: nowrap;
    margin-top: 10px;
    color: ${({theme}) => theme.colors.white}
`;


const Skills = () => {

    const skills = [
        { name: "html", icon: <Html5 />, color: "#e34c26" },
        { name: "css3", icon: <Css3 />, color: "#2965f1" },
        { name: "javascript", icon: <Javascript />, color: "#f0db4f" },
        { name: "sass", icon: <Sass />, color: "#c69" },
        { name: "bootstrap", icon: <Bootstrap />, color: "#563d7c" },
        { name: "rwd", icon: <PhoneDesktop />, color: "#e75a7c" },
        { name: "react", icon: <ReactLogo />, color: "#61dbfb" },
        { name: "styled components", icon: <StyledComponents />, color: "#fff" },
        { name: "wordpress", icon: <Wordpress />, color: "#21759b" },
        { name: "Woocommerce", icon: <Woo />, color: "#764abc" },
        { name: "git", icon: <Github />, color: "#fff" },
        { name: "figma", icon: <Figma />, color: "#dac9ba" },
        { name: "java", icon: <Java />, color: "#fe0200" },
        { name: "Postman", icon: <Postman />, color: "#fffff5" },
        { name: "SpringBoot", icon: <SpringBoot />, color: "#0bff1c" },
        { name: "Graphql", icon: <Graphql />, color: "#ed27ff" },
        { name: "Docker", icon: <Docker />, color: "#2732ff" },
        { name: "Mysql", icon: <Mysql />, color: "#ff7d06" },

    ];

    return(

        <SectionContainer>
            <SkillsTable>
                {skills.map((link, index) => (
                    <SkillsItem className="cursor_hover" key={index}>
                        <SkillsSvgWrapper color={link.color} data-scroll>
                            {link.icon}
                        </SkillsSvgWrapper>
                        <SkillsInfo>
                            {link.name}
                        </SkillsInfo>
                    </SkillsItem>
                ))}
            </SkillsTable>
        </SectionContainer>
    )}
;

export default Skills;
