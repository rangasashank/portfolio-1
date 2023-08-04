import React, {useState} from 'react';
import Styled from 'styled-components';
import Fade from 'react-reveal/Fade'
import {db} from "./firebase";
import { addDoc, collection } from "firebase/firestore"; 


function Contact() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        addDoc(collection(db,"contacts"), {
            name:name,
            email:email,
            message:message,
        })
        .then(()=> {alert('Message has been submitted')}
        )
        .catch((error)=> {
            alert(error.message);
        });
        setName("");
        setEmail("");
        setMessage("");
    }
  return (
    <div id='Contact'>
        <Fade top>
    <Wrapper>
        <H1>
        <h1>Contact</h1>
        </H1>
        <FormDiv>
        <form className='form' >

        <label>Name</label>
        <input placeholder='name'
               value={name}
               onChange={(e)=> {
                setName(e.target.value)
               }} />

        <label>Email</label>
        <input placeholder='email'
               value={email}
               onChange={(e)=> {
               setEmail(e.target.value)
        }} />

        <label>Message</label>
        <textarea placeholder='message'
                  value={message}
                  onChange={(e)=> {
                  setMessage(e.target.value)
        }} />

        <button onClick={handleSubmit}>Submit</button>
        </form>
        </FormDiv>
    </Wrapper>
    </Fade>
    </div>
  )
}

export default Contact

const Wrapper = Styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100vw;
height: 110vh;
background-size: cover;
background-position: center;
background: rgba(23,23,23);
overflow-x: none;
`
const H1 = Styled.div`
h1{
    color: white;
    margin-top: 2rem;
    margin-bottom: 2rem;
}
`
const FormDiv = Styled.div`
border: solid 2px rgb(255,196,12);
border-radius: 25px;
margin-top: 5rem;
@media (max-width: 768px) {
    width: 80vw;
  }

  .form {
    @media (max-width: 768px) {
        width: 70vw;
      }
  }
`