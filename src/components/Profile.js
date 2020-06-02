import React from 'react';
import styled, {keyframes} from 'styled-components'
import {IconMoon} from "../assets/icons/complexIcons";
import Picture from "../assets/img/Me.jpeg";
import {Colors} from "../theme/theme";

const spinRight = keyframes`
    100% {
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 2rem;
  
`
const PlanetContainer = styled.div`
 position: relative;
    top: 25px;
    left: 25px;
    height: 300px;
    width: 300px;
`
const Planet = styled(IconMoon)`
    position: absolute;
    top: 62px;
    left: -6px;
    height: 120px;
    width: 120px;
    border-radius: 100%;
    
    
`
const Rotation = styled.div`
     position: absolute;
    top: -50px;
    left: 0;
    width: 300px;
    height: 300px;
    border: 2px #4A437F dashed;
    border-radius: 100%;
    -webkit-animation: ${spinRight} 15s linear infinite;
    animation: ${spinRight} 15s linear infinite;
    .icon-moon {    font-size: 4rem;
    position: absolute;
    left: 45px;
    }
    
    
`

const Content = styled.div`
    text-align: left;
    margin: 0 auto;
    p {
      max-width: 850px;
      margin-top:1rem;
    }
    
    @media (max-width: 425px){
      width: 100%;
      text-align: center;
    }
`

const Image = styled.img`
  height: 22rem;
  width: 22rem;
  border-radius: 50%;
  border: solid 3px ${Colors.primary};
  float: left;
  shape-outside: circle(50%); 
  margin:0 4rem;
  
  @media (max-width: 425px){
    float: none;
  }

`

const Profile = ({}) => {
    return (
        <Container>
            <Content>
                <Image
                    src={Picture}/>
                <p>I'm a full-time Frontend Engineer based in Cape Town, South Africa. <br/>
                    I enjoy turning complex problems into simple, beautiful and intuitive
                    designs. I have experience working in a dynamic startup, as well as in an agency where
                    deadlines were critical.
                    When I'm not coding, closing tickets or pushing pixels, you'll find me jamming
                    video games,
                    gardening or playing Magic: the Gathering.
                </p>
            </Content>

        </Container>

    )
}

export default Profile