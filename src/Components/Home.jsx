import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Header/>
        <Section/>
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('/images/background.jpg');
    z-index: 0;
`