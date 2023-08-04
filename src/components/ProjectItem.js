import React from 'react'
import Fade from 'react-reveal/Fade';
import Styled from 'styled-components';


function ProjectItem(props) {
  return (
   <div className='item'>
    <a href= {props.link} target="_blank">
    <Container>
    <Fade bottom>
        <Title>
            <h3>{props.name}</h3>
        </Title>
        <Image imgPath = {props.img}/>
        <Description>
            <p>{props.desc}</p>
        </Description>
    </Fade>
    </Container>
    </a>
   </div>
  )
}
export default ProjectItem;

const Title = Styled.div`
display: flex;
flex-direction: column;
align-items: center;
font-size: 1.5rem;
color: black;
h3{
    border-bottom: solid 1.5px black;
}

`
const Image = Styled.img.attrs(props => ({
    src: props.imgPath,
  }))`
  height: 10rem;
  display:flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;


  `
const Description = Styled.div`
p{
    font-size: 20px;
}
border: dotted 1.5px black;
border-bottom: none;
text-align: center;
`
const Container = Styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 2rem;
border: solid 2px black;
flex-wrap: wrap;
position: relative;
  width: 30rem;
  background: rgba(255,196,12,0.8);
  border-radius: 0% 0% 0% 0% / 0% 0% 0% 0% ;
  color: white;
  box-shadow: 20px 20px rgba(0,0,0,.15);
  transition: all .4s ease;

  :hover {
    border-radius: 0% 0% 50% 50% / 0% 0% 5% 5% ;
    box-shadow: 10px 10px rgba(0,0,0,.25);
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 80vw;
  }
`