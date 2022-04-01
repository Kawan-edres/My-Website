import React from 'react'
import styled from 'styled-components'
import Skills from '../Components/Skills'
import PersonalDetails from '../Components/PersonalDetails'



const About = () => {
  return (
    <AboutStyle >
     
     
    <PersonalDetails />
    <Skills />

   
    
   

   
    </AboutStyle>
  )
}


const AboutStyle=styled.div`
height:auto;
width: 100vw;
margin-top: 5rem;
overflow-y: scroll;
overflow-x: hidden;



  
`
export default About