import React from 'react';
import Styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import SkillBox from './SkillBox';
import {HashLink as Link} from 'react-router-hash-link'
import Projects from "./Projects"

function About() {
  return (
    <div id='About'>
         <Wrap>
            <Fade top>
                <H1>
                <h1>Skills</h1>
                </H1>
                <Container>
                    <SkillBox 
                    img="/html.png"
                    name="HTML"/>
                    <SkillBox 
                    img="/css.png"
                    name="CSS"/>
                    <SkillBox 
                    img="/js.png"
                    name="JavaSript"/>
                    <SkillBox 
                    img="/react.png"
                    name="React"/>
                    <SkillBox 
                    img="/node.webp"
                    name="NodeJS"/>
                    <SkillBox 
                    img="/express.webp"
                    name="Express"/>
                    <SkillBox 
                    img="/mongodb.svg"
                    name="MongoDB"/>
                    <SkillBox 
                    img="/python.png"
                    name="Python"/>
                    <SkillBox 
                    img="/java.png"
                    name="Java"/>
                    <SkillBox 
                    img="/c.png"
                    name="C"/>
                    <SkillBox 
                    img="/sql.png"
                    name="SQL"/>
                    <SkillBox 
                    img="/firebase.png"
                    name="Firebase"/>
                    <SkillBox 
                    img="/mui.png"
                    name="Material-UI"/>
                    <SkillBox 
                    img="/ds.png"
                    name="Data Structures"/>
                    <SkillBox 
                    img="/algo.jpeg"
                    name="Algorithms"/>
                </Container>
            </Fade>
            <Link to="#Projects">
                <DownArrow src = '/down-arrow.svg' />
                </Link>
         </Wrap>

         <Projects></Projects>
    </div>
  )
}

export default About

const Wrap = Styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100vw;
color: black;
height: 100vh;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background: rgba(255,196,12,0.8);
overflow-x: hidden;
@media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
}
`


const H1 = Styled.div`
padding-top:2vh;
text-align: center;
border-bottom: solid 3px black;
`
const Container = Styled.div`
padding-top: 3vh;
margin: 3vh;
display: flex;
flex-direction: row;
justify-content: space-around;
flex-flow: wrap;
`


const DownArrow = Styled.img`
height: 40px;
overflow-x: hidden;
animation: animateDown infinite 1.5s;
padding-bottom: 20px;

`