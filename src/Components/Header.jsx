import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Bar>
        <Wrap>
            <Logo>
                <img src="/images/Logo.png" alt="logo"></img>
            </Logo>
            <Title>
                <h1>BUZGALO.DEV APPS PAGE</h1>
            </Title>
        </Wrap>
    </Bar>
  )
}

export default Header

const Bar = styled.div`
    position: relative;
    width: 100%;
    height: 50px;
    top: 0;
    right: 0;
    left: 0;
    padding: 0;
    margin: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.4);
    overflow: hidden;
`

const Wrap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`

const Logo = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 20;
    img {
        max-height: 100%;
        width: auto;
    }
    @media (max-width: 768px){
        display: none;
    }
    padding: 0;
    height: 100%;
    width: 20%;
`

const Title = styled.div`
    z-index: 20;
    h1 {
        color: white;
        font-weight: 600;
        font-family: "Cascadia Code",sans-serif;
        font-size: 30px;
    }
`