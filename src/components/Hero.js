import React from 'react';
import styled from "styled-components";
import Heading from "./basic/Heading";
import {Colors} from "../theme/theme";
import background from "../assets/img/asteroids.jpg";

const Subtitle = styled.h3`
  font-size: 1.6rem;
  text-transform: uppercase;
  letter-spacing: 1rem;
`
const TextBox = styled.div`
    position: absolute;
    top: 40%;
    left: 30%;
    transform: translate(-50%, -50%);
    text-align: center;

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
            <TextBox>
                <Heading letterSpaced>Best title ever</Heading>
<Subtitle>how about / a subtitle / too</Subtitle>
            </TextBox>
        </StyledHero>
    )
}

export default Hero