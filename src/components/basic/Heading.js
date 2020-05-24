import React from 'react';
import styled from "styled-components";

const Header = styled.h1``

const Text = styled.span`
    font-size: 2rem;
    font-weight: 700;
    ${props => props.letterSpaced &&  "letter-spacing: 1.7rem;"};
    
`


const Heading = ({children, letterSpaced}) => {
    return (
        <Header>
            <Text letterSpaced={letterSpaced}>{children}</Text>
        </Header>
    )
}

export default Heading