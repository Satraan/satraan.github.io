import React from 'react';
import styled from "styled-components";

const StyledSection = styled.section`
display: block;
width: 100%;
`

const Section = ({children}) => {
    return (
        <StyledSection>{children}</StyledSection>
    )
}

export default Section