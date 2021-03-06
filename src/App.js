import React from 'react';
import styled, {keyframes} from "styled-components";
import {Colors} from "./theme/theme";
import './App.css';
import Section from "./components/layout/Section";
import Heading from "./components/basic/Heading";
import Navigation from "./components/Navigation";
import Showcase from "./components/Showcase";
import Form from "./components/Form";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import {IconMoon} from "./assets/icons/complexIcons";
import asteroidBackground from "./assets/img/SpaceBack1.svg";
import planetfall from "./assets/img/Planetfall.svg";
import RouxtAccessLogo from "./assets/img/RouxtAccess.png";
import SpinningPlanet from "./components/animations/SpinningPlanet";
import Hero from "./components/Hero";

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

// const IconVenus = styled.div`
//   height: 40px;
//   width: 40px;
//   margin:0 auto;
//   background-image: url(${venus});
//   background-position: center;
//   background-size: contain;
//   -webkit-animation: ${spinRight} 15s linear infinite;
//   animation: ${spinRight} 15s linear infinite;
// `

const App = () => {
    return (
        <Body>
            <Header>
                <Hero/>
            </Header>
            <Main>
                {/*<Navigation/>*/}
                <Section>
                    <RotatingMoon>
                        <IconMoon/>
                    </RotatingMoon>
                    <Heading> About me </Heading>
                    <Profile/>
                </Section>
                <Section>
                    <SpinningPlanet variant={"neptune"}/>
                    <Heading>
                        Skills
                    </Heading>

                    <p>My main area of expertise is front end development (the client side of the
                        web).</p>
                    <p>I'm proficient with building small and medium web apps with React, API
                        integration, animations, responsiveness, and coding interactive layouts.</p>
                    <br/>
                    <Skills/>
                </Section>

                <Section>
                    <SpinningPlanet variant={"venus"}/>
                    <Heading>Showcase</Heading>

                    <ShowcaseContainer>
                        <Showcase title={"Sweepsouth"}
                                  src={"data:image/png;base64,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"}
                                  link={"https://sweepsouth.com/"}
                                  tags={["HTML", "React.js", "CSS", "Next.js", "Django", "Git"]}>
                            <ul>
                                <li>
                                    Frontend React app
                                </li>

                                <li>
                                    Jest & Cypress for testing

                                </li>
                                <li>
                                    Connects to Python API using graphQL

                                </li>
                                <li>
                                    Django templates for admin panel

                                </li>
                                <li>
                                    MySQL database

                                </li>
                                <li>
                                    Git / Gitlab for version control and CI/CD

                                </li>
                                <li>
                                    Agile development structure

                                </li>
                            </ul>
                        </Showcase>


                        <Showcase title={"DoubleExposure"}
                                  src={"https://www.doubleexposure.co/assets/app/logos/logo-doubleexposure-1000x161-6d78231d57d346694d56c15552c280f7.png"}
                                  link={"https://www.doubleexposure.co/"}
                                  tags={["HTML", "SemanticUI", "CSS", "Groovy", "Grails"]}>

                            <ul>
                                <li>
                                    Frontend built using Underscore.js & Handlebars
                                </li>
                                <li>
                                    Semantic UI as styling framework
                                </li>
                                <li>
                                    Upload helper electron app
                                </li>
                                <li>
                                    Connects to Groovy(Java) API
                                </li>
                                <li>Uses Grails as backend framework</li>
                                <li>Mercurial for version control</li>
                            </ul>
                        </Showcase>

                        <Showcase title={"RouxtAccess"}
                                  src={RouxtAccessLogo}
                                  link={"https://www.doubleexposure.co/"}
                                  tags={["HTML", "SCSS", "Firebase"]}>


                            <ul>
                                <li>
                                    SEO-optimized HTML
                                </li>
                                <li>SCSS for original styling</li>
                                <li>Google analytics</li>
                                <li>Responsive design</li>
                                <li>Hosted on firebase</li>
                                <li>
                                    Contact form handled by Formspree
                                </li>
                            </ul>
                        </Showcase>
                        {/*<li>*/}
                        {/*    <Showcase title={"This!"}*/}
                        {/*              src={"https://www.doubleexposure.co/assets/app/logos/logo-doubleexposure-1000x161-6d78231d57d346694d56c15552c280f7.png"}*/}
                        {/*              link={"https://www.doubleexposure.co/"}*/}
                        {/*              tags={["HTML", "SCSS", "React", "styled-components", "Firebase"]}>*/}
                        {/*        <ul>*/}
                        {/*            <li>*/}
                        {/*                Personal portfolio site*/}
                        {/*            </li>*/}
                        {/*        </ul>*/}

                        {/*        <ul>*/}
                        {/*            <lh> Technical specs:</lh>*/}
                        {/*            <li>*/}
                        {/*                Basic React app*/}
                        {/*            </li>*/}
                        {/*            <li>Styled-components for CSS-in-JSX</li>*/}
                        {/*            <li>Google analytics</li>*/}
                        {/*            <li>Hosted on firebase</li>*/}
                        {/*        </ul>*/}
                        {/*    </Showcase>*/}
                        {/*</li>*/}
                    </ShowcaseContainer>
                </Section>
                <ContactSectionWrapper>
                    <Section>
                        <SpinningPlanet variant={"jupiter"}/>
                        <Heading> Contact</Heading>
                        <Form/>
                    </Section>

                </ContactSectionWrapper>
                <FooterDivider/>
            </Main>
            <Footer>

            </Footer>
        </Body>
    );
}

export default App;
