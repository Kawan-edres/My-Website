import React from 'react'
import styled from 'styled-components'
import Skills from '../Components/Skills'
import PersonalDetails from '../Components/PersonalDetails'
import Footer from '../Components/Footer'



const About = () => {
  return (
    <AboutStyle >
    
  
    <PersonalDetails />
    <Skills />
    <Footer />

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