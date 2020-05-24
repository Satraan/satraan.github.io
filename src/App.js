import React from 'react';
import styled from "styled-components";
import {Colors} from "./theme";
import './App.css';
import Hero from "./components/Hero";
import Section from "./components/layout/Section";

const Body = styled.div`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    background-color: ${Colors.background};
    color: whitesmoke;
`

const Header = styled.header``
const Main = styled.main`
    display: flex; 
    flex-direction: column;
    padding: 3rem;
    
`

const App = () => {
    return (
        <Body>
            <Header>
                <Hero/>
            </Header>
            <Main>
                <Section>
                    <h2>About me</h2>
                    <p>Professionally connected with the web development industry and information technology for many
                        years.</p>
                    <p>Well-organised person, problem solver, independent employee with high attention to detail. Fan of
                        MMA, outdoor activities, TV series and, recently, English literature. A family person, father of
                        two
                        fractious boys, therefore remote employment is preferred..</p>
                    <p>Professionally connected with the web development industry and information technology for many
                        years.</p>
                </Section>
                <Section>
                    <h2>Skills</h2>
                    <p>The main area of my expertise is front end development (client side of the web).</p>
                    <p>HTML, CSS, JS (TypeScript), building small and medium web apps with Angular 2+, custom plugins,
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
                    <h2>Showcase</h2>
                    <h2>I've worked on</h2>
                    <ul>
                        <li>
                            Sweepsouth
                        </li>
                        <li>
                            DoubleExposure
                        </li>
                        <li>
                            Porfolio Site Placeholder
                        </li>
                    </ul>
                </Section>
                <Section>
                    <h2>Contact</h2>
                </Section>
            </Main>
        </Body>
    );
}

export default App;
