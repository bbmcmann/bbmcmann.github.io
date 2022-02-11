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

function Eleven(){

    return (
        <StyledTitle>11</StyledTitle>
    );
};

export default Eleven;