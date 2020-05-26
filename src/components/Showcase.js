import React from 'react';
import styled from "styled-components";
import {Row, Column} from "../components/basic/Grid"
import {Colors} from "../theme/theme";

const Header = styled.h1``

const StyledShowcase = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    
    
    width: 100%;
    margin-bottom: 5rem;
    padding: 3rem 1rem;
    background-color: rgba( ${Colors.primaryDarkRGB}, .8);

`
const Preview = styled.a`
display: inline-block;
background-image: url(${props => props.src});
width: 30rem;
height: 20rem;
background-position: center;
background-size: contain;
background-repeat: no-repeat;
`
const Heading = styled.h3``

const TagContainer = styled.div`
position: absolute;
bottom:0;
`

const Content = styled.div`
display: flex;
text-align:left;
`
const Tag = styled.span`
background-color: ${Colors.primaryLight};
color: ${Colors.primaryDarker};

margin: 0 3px;
padding: .5rem;
border-radius: 3px;
`

const Showcase = ({title, children, src, link, tags = []}) => {
    return (
        <StyledShowcase>
                <i className={"icon-moon"}/>
                <Preview target={"_blank"} href={link}
                         src={src}>
                </Preview>
                <TagContainer>
                    {tags.map(tag => {
                        return <Tag>{tag}</Tag>
                    })}
                </TagContainer>

                {children}
        </StyledShowcase>

    )
}

export default Showcase