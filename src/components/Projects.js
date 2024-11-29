import React from 'react';
import Styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import ProjectItem from '../components/ProjectItem';
import {HashLink as Link} from 'react-router-hash-link';
import Contact from './Contact';
const projects = [
    {
        name: 'Flatmate Flow',
        desc: "Full Stack web application designed for roommates to manage shared tasks, expenses, and notes.",
        link: "https://flatmateflow.netlify.app/",
        img: "/ff.png"
    },
    {
        name: '7-Day-Weather App',
        desc: "Displays the 7-Day weather forecast of the given location using OpenWeatherMap API. Technologies: HTML, CSS, JavaScript, fetch-API",
        link: "http://webhome.csc.uvic.ca/~rangasashankgurram/project2.html",
        img: "/7Day.png"
    },

    {
        name: 'Tesla-Clone',
        desc: "Clone of the Tesla website, learnt React basics by building this. Technologies: React, styled-components, material-ui",
        link: "https://clone-tesla-ranga.netlify.app/",
        img: "/tesla.png"
    },

    {
        name: 'Automated birthday Wisher',
        desc: "Automatically sends birthday wishes through email. Technologies: Python, File Handling",
        link: "https://github.com/rangasashank/birthday_wisher",
        img: "/bday.png"
    }


]
function Projects() {
  return (
    <div id="Projects">
        <Fade bottom>
        <Wrapper>
        <H1>
        <h1>Projects</h1>
        </H1>
        <Container>
        {projects.map(item => (
             <ProjectItem img={item.img} name={item.name} link={item.link} desc={item.desc}/>
        ))}
         </Container>
         <Link to="#Contact">
            <DownArrow src = '/down-arrow.svg' />
            </Link>
        </Wrapper>

        </Fade>
        <Contact />
        </div>
  )
}

export default Projects
const Wrapper = Styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
background: #585858;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
h1{
    border-bottom: solid 2px black;
}
`
const Container = Styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
flex-flow: wrap;
`
const H1 = Styled.div`
padding-bottom: 2rem;
`
const DownArrow = Styled.img`
height: 40px;
overflow-x: hidden;
animation: animateDown infinite 1.5s;
padding-bottom: 20px;
`