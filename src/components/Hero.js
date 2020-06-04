import React from 'react';
import styled from "styled-components";
import Heading from "./basic/Heading";
import {Colors} from "../theme/theme";
import background from "../assets/img/MartiangreyNoPlanet.svg";
import RocketBackground from "../assets/img/RocketBGTrans.svg";
import CloudsBackground from "../assets/img/Clouds.svg";
import Rocket from "../assets/img/RocketWithTailMed.svg";
import {Main} from "../AppStyles";
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';

const Subtitle = styled.h3`
  font-size: 1.6rem;
  text-transform: uppercase;
  letter-spacing: 1rem;
`
const TextBox = styled.div`
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

`
const StyledHero = styled.div`
  height: calc(100vh + 300px);
  display: flex;
  background-image: linear-gradient(
                  to right bottom,
                  rgba(${Colors.primaryDarkRGB}, 0.4),
                  rgba(${Colors.primaryDarkerRGB}, 0.4)),
  url(${background});
  background-attachment: fixed;
  background-position: center;
  position: relative;
  background-size: cover;
`

// const RocketShip = styled.span`
//     position: absolute;
//     bottom:0;
//     left: 0;
//     right:0;
//     height:100%;
//     width: 100%;
//     background-image:url(${RocketBackground}) ;
//
//     background-size: cover;
//     background-position: center;
//     background-repeat: no-repeat;
//     z-index: 400;
//     transform: translateY(40%);
// `
const RocketShip = styled(Parallax)`
    bottom:0;
    left: 0;
    right:0;
    height:100vh;
    width: 100vw;
    // background-image:url(${RocketBackground}) ;
    // //
    // background-size: cover;
    // background-position: center;
    // background-repeat: no-repeat;
    z-index: 400;
`

const ShipContainer = styled.div`
margin-top:20vh;
    height: 100vh !important;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
`
const FluidBanner = styled(Parallax)`
   //  background-image:url(${Rocket}) ;
   //  width: 100px;
   // height: 400px;
   // z-index: 200;
   // background-size: contain;
   // background-position: center;
   // background-repeat: no-repeat;
`

const BorderHolder = styled.div`
  position: relative;
  width: 100%;
  height: 1px;
  border:solid 2px red;

`
const Clouds = styled.div`
  width: 100%;
  height: 200px;
  border:solid 2px yellow;
  transform: translateY(-50%);
  //
  // background-image:url(${RocketBackground}) ;
  // background-size: cover;
  // background-position: center;
  //
  ::before {
   content: " ";
   position: absolute;
   width: 100%;
   height: 1200px;
   z-index: 10;
   background-image: url(${CloudsBackground});
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   transform: translateY(-25%);
  }
`
const Ship = styled.div`
  width: 100px;
  height: 400px;
  margin:0 auto;
  border:solid 2px cyan;
  z-index:1000;

::before {
   content: " ";
   position: absolute;
   width: 100px;
   height: 400px;
   z-index: 200;
   background-image: url(${Rocket});
   background-size: contain;
   background-position: center;
   background-repeat: no-repeat;
  }
  

`

const Hero = () => {
    return (
        <React.Fragment>

        <StyledHero>
            <TextBox>
                <Heading letterSpaced>Mandia Roux</Heading>
                <Subtitle>Frontend Developer</Subtitle>
            </TextBox>

            {/*<RocketShip*/}
            {/*    bgImage={require('../assets/img/Planetfall.svg')}*/}
            {/*    strength={400}*/}
            {/*    renderLayer={percentage => (*/}
            {/*        <div*/}
            {/*            style={{*/}
            {/*                position: 'absolute',*/}
            {/*                background: `rgba(255, 125, 0, ${percentage * 1})`,*/}
            {/*                left: '50%',*/}
            {/*                top: '50%',*/}
            {/*                width: 500,*/}
            {/*                height: percentage * 500,*/}
            {/*            }}*/}
            {/*        />*/}
            {/*    )}*/}
            {/*>*/}
            {/*    <p>... Content</p>*/}
            {/*</RocketShip>*/}

        </StyledHero>
            <ShipContainer>
            <FluidBanner y={[190, 0]}
            >
                <Ship/>
            </FluidBanner>
            </ShipContainer>
            <BorderHolder>
                <Clouds/>
            </BorderHolder>
        </React.Fragment>
    )
}

export default Hero