import React from 'react'
import styled from 'styled-components'
import Skills from '../Components/Skills'
import PersonalDetails from '../Components/PersonalDetails'



const About = () => {
  return (
    <AboutStyle >
     
     
    <PersonalDetails />
   
    {/* <Skills /> */}
   

   
    </AboutStyle>
  )
}


const AboutStyle=styled.div`
height: 100vh;
width: 100vw;
margin-top: 5rem;







@media screen and (max-width:1000px) {
  flex-direction: column;
  
}


  
`
export default About