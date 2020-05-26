import React from 'react';
import styled from "styled-components";

const StyledSection = styled.section`
    margin: 0 auto;
    max-width: 80%;
    padding: 5rem 0;
`

const Section = ({children}) => {
    return (
        <StyledSection>{children}</StyledSection>
    )
}

export default Section