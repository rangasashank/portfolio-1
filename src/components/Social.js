import React from 'react';
import Styled from "styled-components";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import ResumeIcon from '@material-ui/icons/Description';

function Social() {
  return (
    <Wrapper>
        <Menu>
            <LinkedIn style={{fontSize : "10vh"}} onClick={()=> window.open('https://www.linkedin.com/in/ranga-sashank-g-2028701a6/', '_blank')}/>
            <GitHub style={{fontSize : "10vh"}} onClick={()=> window.open('https://github.com/rangasashank', '_blank')}/>
            <Resume style={{fontSize : "10vh"}} onClick={()=> window.open('https://drive.google.com/file/d/1QqMfk00VotM3CIY41H6eDkAviaZC0AZ7/view?usp=sharing','_blank')} />
        </Menu>
    </Wrapper>
  )
}
export default Social
const Wrapper = Styled.div`
padding: 50vh
display:flex;
justify-content: center;
`
const Menu = Styled.div`
display: flex;


`
const LinkedIn = Styled(LinkedInIcon)`
cursor: pointer;

`
const GitHub = Styled(GitHubIcon)`
cursor: pointer;
`
const Resume = Styled(ResumeIcon)`
cursor: pointer;
`