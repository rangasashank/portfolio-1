import React from 'react'
import Fade from 'react-reveal/Fade';
import Styled from 'styled-components';

import {HashLink as Link} from 'react-router-hash-link'
function SkillBox(props) {
  return (
   <div className='SkillBox'>
    <Fade bottom>
        <Image imgPath = {props.img}/>
        <Title>
            <h3>{props.name}</h3>
        </Title>
    </Fade>
   </div>
  )
}
export default SkillBox;

const Title = Styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const Image = Styled.img.attrs(props => ({
    src: props.imgPath,
  }))`
 height: 90px;
 padding-left: 0;
 margin: 0;
 position: relative;
 display: flex;
 align-items: center;
 justify-content: center;

  `