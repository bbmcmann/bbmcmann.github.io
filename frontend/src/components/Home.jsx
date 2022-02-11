import React, { useState } from 'react';
import styled from 'styled-components';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';

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

const StyledButton = styled.button `
    border: none;
    transition: .4s ease-in;
    z-index: 1;
    width: 20vw;
    height: 50px;
    margin-top: 5px;
    margin-bottom: 5px;
`;

const StyledWrap = styled.div `
    margin: 10px;
    &:hover ${StyledButton} {
        width: 25vw;
        background: #ff96ad;
        box-shadow: 0 0 5px #ff96ad, 0 0 25px #ff96ad, 0 0 50px #ff96ad, 0 0 200px #ff96ad;
        margin-top: 20px;
        margin-bottom: 20px;
    }
`;

function Home(){

    const [buttons, setButtons] = useState(['Button #0']);
    const [count, setCount] = useState(1);
    const [pageCode, setPageCode] = useState('');

    function clickEnter(){
        setCount(count + 1);
        setButtons([...buttons, `Button #${count}`]);
    }

    return (
            <StyledMain maxWidth='md'>
                <StyledTitle>Home</StyledTitle>
                <StyledP>
                    Hello, welcome to my site.
                    This webapp is still a work in progress, but I hope
                    it will become a good place for me to showcase myself and my projects.
                </StyledP>
                <StyledP>
                    Not too sure what I will do with this homepage yet,
                    possibly an assortment of css experiments, but for now
                    enjoy these fun buttons below :)
                </StyledP>
                <br />
                <br />
                {buttons ?
                    (buttons.map((button) => {
                        if(button === 'Button #11'){
                            return (
                                <StyledWrap>
                                    <Link to='11'>
                                        <StyledButton key={button} onClick={clickEnter}>Secret {button}?</StyledButton>
                                    </Link>
                                </StyledWrap>
                            )
                        }
                        else{
                            return (
                                <StyledWrap>
                                    <StyledButton key={button} onClick={clickEnter}>{button}</StyledButton>
                                </StyledWrap>
                            )
                        }
                    })) 
                : null}
            </StyledMain>
    );
};

export default Home;