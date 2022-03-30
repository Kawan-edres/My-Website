import React from 'react'
import styled from 'styled-components'
import Html from "../Assets/Skills/html.png"
import Css from "../Assets/Skills/css.png"
import Js from "../Assets/Skills/jss.png"
import Reactjs from "../Assets/Skills/react.png"
import Redux from "../Assets/Skills/redux.png"
import Tailwind from "../Assets/Skills/tailwind.png"
import Next from "../Assets/Skills/next.png"
import Bootstrap from '../Assets/Skills/bootstrap.png'
import Git from '../Assets/Skills/git.png'
import Styled from '../Assets/Skills/styled.png'
import Sass from '../Assets/Skills/sass.png'
import Ts from '../Assets/Skills/ts.png'
import Java from '../Assets/Skills/java.png'
import MySql from '../Assets/Skills/mysql.png'
import Framer from '../Assets/Skills/motion.png'
import Ant from '../Assets/Skills/ant.png'


const Skills = () => {
  return (
    <SkillsStyle> 
    <div className='title'>
        
         <h1>Skills</h1>
         
    </div>
        
         <div className='logo'>
         <div><img src={Html} alt="html" /></div>
         <div><img src={Css} alt="css" /></div>
         <div><img src={Js} alt="java script" /></div>
         <div><img src={Bootstrap} alt="bootstrap" /></div>
         <div><img src={Tailwind} alt="tailwind" /></div>
         <div><img src={Ant} alt="ant design" /></div>
         <div><img src={Styled} alt="styled components" /></div>
         <div><img src={Sass} alt="sass" /></div>
         <div><img src={Reactjs} alt="react" /></div>
         <div><img src={Redux} alt="redux" /></div>
         <div><img src={Next} alt="next" /></div>
         <div><img src={Framer} alt="framer motion" /></div>
         <div><img src={Ts} alt="type scrpit" /></div>
         <div><img src={Git} alt="git" /></div>
         <div><img src={Java} alt="java" /></div>
         <div><img src={MySql} alt="mysql" /></div>

         </div>
    </SkillsStyle>
  )
}



const SkillsStyle=styled.div`
height: 100vh;
width: 82%;
margin-top: 50px;


.title{
  text-align: center;
  height: 12vh;
  border: 2px solid black;
  width: 80%;
  margin: 0 auto;

  h1{
    font-size: 3rem;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    }

}

.logo{
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(300px,1fr)) ;
  justify-items: center;
  align-items: center;
  grid-row-gap: 2rem;
  margin-top: 100px;
}
img{
  width: 100%;
  object-fit: contain;
}




`

export default Skills