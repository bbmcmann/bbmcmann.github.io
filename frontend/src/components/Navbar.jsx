import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';

const StyledP = styled.p`
    padding: 20px;
    border: none;
    transition: 1.5s ease-in;
    z-index: 1;
`;

const StyledWrap = styled(Link)`
    margin: 30px;
    color: white;
    text-decoration: none;
    &:hover ${StyledP} {
        background: #ff96ad;
        box-shadow: 0 0 5px #ff96ad, 0 0 25px #ff96ad, 0 0 50px #ff96ad, 0 0 200px #ff96ad;
        cursor: pointer;
    }
`;

const StyledMain = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #1B1B1B;
    color: white;
    
`;

function Navbar(){

    return (
        <Container maxWidth='lg'>
            <StyledMain>
                <StyledWrap to='/'>
                <StyledP>Home</StyledP>
                </StyledWrap>
                <StyledWrap to='/about'> 
                <StyledP>About</StyledP>
                </StyledWrap>
                <StyledWrap to='/projects'> 
                <StyledP>Projects</StyledP>
                </StyledWrap>
                <StyledWrap to='/contact'> 
                <StyledP>Contact</StyledP>
                </StyledWrap> 
            </StyledMain>
        </Container>
    );
};

export default Navbar;