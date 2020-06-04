import React from "react";
import styled from "styled-components";
import {Parallax} from "react-scroll-parallax";
import CloudsBackground from "../../assets/img/Clouds.svg";
import Rocket from "../../assets/img/RocketWithTailMed.svg";

const ShipContainer = styled.div`
    margin-top: 20vh;
    height: 100vh !important;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
`
const FluidBanner = styled(Parallax)`
`

const BorderHolder = styled.div`
  position: relative;
  width: 100%;
  height: 1px;
`
const Clouds = styled.div`
  width: 100%;
  height: 200px;
  transform: translateY(-50%);
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
  width: 200px;
  height: 400px;
  margin:0 auto;
  z-index:1000;

::before {
   content: " ";
   position: absolute;
   width: 200px;
   height: 400px;
   z-index: 200;
   background-image: url(${Rocket});
   background-size: contain;
   background-position: center;
   background-repeat: no-repeat;
  }
  

`

const RocketLaunch = () => {
    return (

        <React.Fragment>
            <ShipContainer>
                <FluidBanner y={[500, 30]}
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

export default RocketLaunch
