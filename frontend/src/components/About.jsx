import react from "react";
import styled from 'styled-components';
import { Container } from '@mui/material';

const StyledMain = styled(Container)`
    background: #1B1B1B;
`;

const StyledDiv = styled.div`
    background: #1B1B1B;
    text-align: left;
    
`;

const StyledTitle = styled.p`
    font-size: 35px;
    color: white;
`;

const StyledP = styled.p`
    transition: .4s ease-in;
    color: white;
    font-size: 18px;
    margin-bottom: 20px;
    text-align: left;
    padding: 5px;
    padding-left: 10px;
    border-left: solid white 2px;
    border-radius: 2px;
`;

const StyledA = styled.a`
    text-decoration: none;
    text-align: left;
    font-weight: bold;
    color: white;
    font-size: 15px;  
`;


const StyledWrap = styled.div`
    
    &:hover ${StyledP} {
        background: #ff96ad;
        box-shadow: 0 0 5px #ff96ad, 0 0 25px #ff96ad, 0 0 50px #ff96ad, 0 0 200px #ff96ad;
        padding-top: 20px;
        padding-bottom: 20px;
        font-size: 20px;
        cursor: grabbing;
    }
`;

function About(){

    return (
        <StyledMain>
            <StyledTitle>About Me</StyledTitle>
            <StyledDiv>
                <StyledWrap>
                    <StyledP>
                        I'm currently a second year Computer Science student at Cal Poly SLO!
                    </StyledP>
                </StyledWrap>
                <StyledWrap>
                    <StyledP>
                        I enjoy using my software development knowledge on projects I am passionate about, including
                        volunteer development for small nonprofit organizations. Whil less expereinced, I'm also very intersted 
                        in artificial intelligence and machine learning, and would love to work on projects surrounding this topic!
                    </StyledP>
                </StyledWrap>
                <StyledWrap>
                    <StyledP>
                        I'm a member of Cal Poly's Hack4Impact chapter  where I have had the opportunity to work on
                        many projects in partner with nonprofits.
                    </StyledP>
                </StyledWrap>
                <StyledA href='https://calpoly.hack4impact.org/about'>
                    Check out Hack4Impact here!
                </StyledA>
                <StyledWrap>
                    <StyledP>
                        Originally from Colorado, I love being outside going on hikes or camping. I'm a huge music nerd
                        and go to concerts whenever I have the chance, and of course I enjoy videogames :) 
                    </StyledP>
                </StyledWrap>
                
            </StyledDiv>
        </StyledMain>
        

    );
};

export default About;