import React from 'react';
import styled from "styled-components";

const Header = styled.h1`
    font-size: 4rem;
    font-weight: 700;
    ${props => props.letterSpaced && "letter-spacing: 1.7rem;"};
    
`


const Heading = ({children, letterSpaced}) => {
    return (
        <Header letterSpaced={letterSpaced}>
            {children}
        </Header>
    )
}

export default Heading