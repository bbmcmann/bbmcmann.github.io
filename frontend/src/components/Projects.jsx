import react from "react";
import styled from 'styled-components';
import { Container } from '@mui/material';

let projData = require('../projects.json');


const StyledMain = styled(Container)`
    background: #1B1B1B;
`;

const StyledTitle = styled.p`
    font-size: 35px;
    color: white;
`;

const StyledP = styled.p`
    color: white;
    font-size: 15px;
    margin-bottom: 30px;
`;

const StyledHeader = styled.p`
    color: black;
    font-size: 26px;
    text-align: left;
    font-weight: bold;
    margin-bottom: 30px;
`;

const ProjectDiv = styled.div`
    margin-top: 10px;
    margin-bottom: 20px;
    background: white;
    padding: 10px 5px 20px 20px;
    border-radius: 7px;
    text-align: left;
`;

const ProjectDesc = styled.p`
    text-align: left;
    color: black;
    font-size: 20px;
`;

const ProjectTime = styled.p`
    text-align: left;
    color: black;
    font-size: 16px;
    font-style: italic;
`;

const ProjectTech = styled.p`
    text-align: left;
    color: black;
    font-size: 16px;
    font-weight: bold;
`;

const StyledA = styled.a`
    text-decoration: none;
    text-align: left;
    text-color: black;
    font-size: 15px;  
`;

function Projects(){
    return (
        <StyledMain>
            <StyledTitle>Projects</StyledTitle>
            <StyledP>
                Here's the interesting stuff
            </StyledP>
            {projData? 
            projData.map((proj) => {
                console.log(proj);
                return(
                    <ProjectDiv key={proj.name}>
                        <StyledHeader>{proj.name}</StyledHeader>
                        <ProjectTime>{proj.timeline}</ProjectTime>
                        <ProjectDesc>{proj.desc}</ProjectDesc>
                        <ProjectDesc>{proj.contributions}</ProjectDesc>
                        <ProjectTech>{proj.skills}</ProjectTech>
                        <StyledA href={proj.gitLink}>Check it out on github here!</StyledA>
                    </ProjectDiv>
                )
            }) : null}
        </StyledMain>
    );
};

export default Projects;