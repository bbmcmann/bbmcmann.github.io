import react from "react";
import styled from 'styled-components';
import { Container } from '@mui/material';

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

function Eleven(){

    return (
        <StyledMain>
            <StyledTitle>11</StyledTitle>
            <StyledP>nothing here ;)</StyledP>
        </StyledMain>
        
    );
};

export default Eleven;