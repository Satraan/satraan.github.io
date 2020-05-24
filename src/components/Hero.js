import React from 'react';
import styled from "styled-components";
import Heading from "./basic/Heading";
import {Colors} from "../theme";
import background from "../assets/img/asteroids.jpg";

const Header = styled.header`

`
const StyledHero = styled.div`
  height: 100vh;
  display: flex;
  background-image: linear-gradient(
                  to right bottom,
                  rgba(${Colors.primaryDarkRGB}, 0.8),
                  rgba(${Colors.primaryDarkerRGB}, 0.8)),
  url(${background});
  background-attachment: fixed;
  background-position: center;
  position: relative;
  background-size: auto;
`


const Hero = () => {

    return (
        <StyledHero>
            <Heading letterSpaced>Best title ever</Heading>
        </StyledHero>
    )
}

export default Hero