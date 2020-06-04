import styled, {keyframes} from "styled-components";
import {Colors} from "./theme/theme";
import asteroidBackground from "./assets/img/SpaceBack1.svg";
import planetfall from "./assets/img/Planetfall.svg";

const Body = styled.div`
    background-color: ${Colors.background};
    color: whitesmoke;
    
    p, li {
      font-size: 1.8rem;
      list-style: none;
    }
`
const Header = styled.header``
const Main = styled.main`
      padding-top:45vh;
      border-top:5px solid ${Colors.primaryDarker};
      background-image: linear-gradient(
                     to bottom,
                      rgba(${Colors.primaryDarkerRGB}, 0.9),
                      rgba(${Colors.primaryLightRGB}, 0.1)),
                      url(${asteroidBackground});
    background-size:cover ;
    text-align: center;
  
    @media (max-width: 425px){
      background-position: center;
    }
`

const ContactSectionWrapper = styled.div`
    height: 100vh;
    margin-bottom: 10vh;
`
const ShowcaseContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  
  @media (max-width: 425px){
    flex-direction: column;    
  }
 
`

const spinRight = keyframes`
    100% {
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`
const RotatingMoon = styled.div`
   -webkit-animation: ${spinRight} 15s linear infinite;
    animation: ${spinRight} 15s linear infinite;
`

const FooterDivider = styled.div`
  bottom: 0;
  left: 0;
  right:0;
  height:40vh;
  z-index: 100;
  background-position: top;
  background-image: url(${planetfall});
`

const Footer = styled.footer`
background-color: #3701b9;
`

export {Footer, FooterDivider, RotatingMoon, ShowcaseContainer, ContactSectionWrapper, Main, Header, Body}