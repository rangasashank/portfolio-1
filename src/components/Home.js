import React from 'react';
import Styled from 'styled-components';
import Social from './Social'
import About from './About'
import {BrowserRouter as Router} from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link'
import Bounce from 'react-reveal/Bounce';



function Home() {
  return (
    <Container>

    <Router>
        <Wrapper>
        <Bounce right>
            <ItemText>
                <p>Aspiring Software Developer</p>
                <h1>Sashank</h1>
                <p>3rd Year CS Student @Uvic</p>
            </ItemText>
            </Bounce>
            <Bounce left>
            <Social />
            </Bounce>
            <Link to='#About'>
                <DownArrow src = '/down-arrow.svg' />
            </Link>
        </Wrapper>
        <About />
        </Router>
    </Container>
  )
}

export default Home

const Container = Styled.div`
`
const Wrapper = Styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-image: url('/background.jpg');
`
const ItemText = Styled.div`
padding-right: 0px;
color: rgb(71, 69, 63);
padding-top: 20vh;
margin-bottom: 50px;
h1 {
    text-decoration: bold;
}


`
const DownArrow = Styled.img`
    margin-top:20px;
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;

`