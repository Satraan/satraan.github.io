import React from 'react';
import styled from "styled-components";
import {Colors} from "./theme/theme";
import './App.css';
import Hero from "./components/Hero";
import Section from "./components/layout/Section";
import Heading from "./components/basic/Heading";
import Navigation from "./components/Navigation";

const Body = styled.div`
    background-color: ${Colors.background};
    color: whitesmoke;
    
    p, li {
      font-size: 1.7rem;
      list-style: none;
    }
`

const Header = styled.header``
const Main = styled.main`
    padding: 3rem;
    text-align: center;
`

const App = () => {
    return (
        <Body>
            <Header>
                <Hero/>
            </Header>
            <Navigation/>
            <Main>
                <Section>
                    <Heading>About me</Heading>
                    <p>Professionally connected with the web development industry and information technology for several
                        years.</p>
                    <p>Well-organised person, problem solver, independent employee with high attention to detail.</p>
                    <p> Fan of
                        Magic: the Gathering, camping, video games and a good wine tasting. </p>

                </Section>
                <Section>
                    <Heading>Skills</Heading>
                    <p>My main area of expertise is front end development (the client side of the web).</p>
                    <p>HTML, CSS, JS, building small and medium web apps with React, API integration,
                        features, animations, and coding interactive layouts.</p>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JS</li>
                        <li>React</li>
                        <li>Python</li>
                        <li>Git</li>
                    </ul>
                </Section>
                <Section>
                    <Heading>Showcase</Heading>
                    <p>I've worked on</p>
                    <ul>
                        <li>
                            Sweepsouth
                        </li>
                        <li>
                            DoubleExposure
                        </li>
                        <li>
                            Porfolio Site Placeholder
                        </li> <li>
                            This!
                        </li>
                    </ul>
                </Section>
                <Section>
                    <Heading>Contact</Heading>
                </Section>
            </Main>
            <footer><p>This is a footer</p></footer>
        </Body>
    );
}

export default App;
