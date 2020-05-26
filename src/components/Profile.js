import React from 'react';
import styled, { keyframes } from 'styled-components'


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
  p {
  width: 50%;
  }
`
const PlanetContainer = styled.div`
 position: relative;
    top: 25px;
    left: 25px;
    height: 300px;
    width: 300px;
`
const Planet = styled.div`
position: absolute;
    top: 62px;
    left: -6px;
    height: 10px;
    width: 10px;
    border-radius: 100%;
    background-color: #9F98E6;
`
const Rotation = styled.div`
     position: absolute;
    top: -25px;
    left: 25px;
    width: 250px;
    height: 250px;
    border: 2px #4A437F dashed;
    border-radius: 100%;
    -webkit-animation: ${spinRight} 15s linear infinite;
    animation: ${spinRight} 15s linear infinite;
`

const ImageContainer = styled.div`
  width: 400px;
  position: relative;
`

const Image = styled.img`
  height: 20rem;
  width: 20rem;
  border-radius: 50%;


`

const Profile = ({}) => {
    return (
        <Container>
            <ImageContainer>
                <PlanetContainer>
                    <Rotation>
                        <Planet/>
                    </Rotation>
                    <Image
                        src={"https://scontent.fcpt7-1.fna.fbcdn.net/v/t1.0-9/72942488_2732566853462038_5769936916023607296_n.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_eui2=AeHlVhSUzTsyJZDCvF2GUtSBJwiAMivt3F8nCIAyK-3cX23Z-BXieOCVV-S7x-AcXgzP_-4ume-IlBcoJZ77rMh3&_nc_ohc=LTtSjxCUBfkAX-2G2CK&_nc_ht=scontent.fcpt7-1.fna&oh=b67dfad156339f00a3040d0fd6389eda&oe=5EF22F5E"}/>
                </PlanetContainer>
            </ImageContainer>
            <p>Professionally connected with the web development industry and information technology
                for several
                years.Well-organised person, problem solver, independent employee with high
                attention to detail.Fan of
                Magic: the Gathering, camping, video games and a good wine tasting. </p>
        </Container>

    )
}

export default Profile