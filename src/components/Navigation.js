import React from 'react';
import styled from "styled-components";
import {Colors} from "../theme/theme"


const Nav = styled.nav`
    position: sticky;
    right: 6rem;
    top: 5rem;
    display: flex;
    flex-direction: column;
    height: 80px;
    width: 80px;
    background-color: ${Colors.primaryDarker};
    border: 2px solid ${Colors.primary};
    color: ${Colors.primary};
    text-align: center;
    padding: 1rem;
`
const Item = styled.div`
    display: block;
    height: 40px;
    font-size: 1.6rem;
`

const Icon = styled.i`
  font-size: 4rem;
  color:${Colors.white};
`
const Link = styled.a`
`


const Navigation = ({}) => {

    return (

        <Nav>

            <Item>
                <Link>
                    <Icon className="icon-rocket-ship"/>
                </Link>

            </Item>
            <Item>
                <Link>
                    About

                </Link>
            </Item>
            <Item>
                <Link>
                    Skills

                </Link>
            </Item>
            <Item>
                <Link>
                    Contact

                </Link>
            </Item>

        </Nav>

    )
}

export default Navigation