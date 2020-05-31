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
margin-left: 400px;
text-align: left;
`
const ImageContainer = styled.div`
  width: 400px;
  position: absolute;
  top:50%;
  transform: translateY(-50%);
`

const Image = styled.img`
  height: 20rem;
  width: 20rem;
  border-radius: 50%;
  border: solid 3px ${Colors.primary};

`

const Profile = ({}) => {
    return (
        <Container>
            <ImageContainer>
                {/*<PlanetContainer>*/}
                {/*    <Rotation>*/}
                {/*        <Planet/>*/}
                {/*    </Rotation>*/}
                    <Image
                        src={Picture}/>
                {/*</PlanetContainer>*/}
            </ImageContainer>
            <Content>
                <p>Professionally connected with the web development industry and information technology
                    for several
                    years.
                    Well-organised person, problem solver, independent employee with high
                    attention to detail.
                    <br/> Fan of Magic: the Gathering, camping, video games and a good wine tasting. </p>
            </Content>

        </Container>

    )
}

export default Profile