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
        
         <h1>My Skills</h1>
         
    </div>
        
         <div className='logo-con'>
         <div className='logo'><img src={Html} alt="html" /></div>
         <div className='logo'><img src={Css} alt="css" /></div>
         <div className='logo'><img src={Js} alt="java script" /></div>
         <div className='logo'><img src={Bootstrap} alt="bootstrap" /></div>
         <div className='logo'><img src={Tailwind} alt="tailwind" /></div>
         <div className='logo'><img src={Ant} alt="ant design" /></div>
         <div className='logo'><img src={Styled} alt="styled components" /></div>
         <div className='logo'><img src={Sass} alt="sass" /></div>
         <div className='logo'><img src={Reactjs} alt="react" /></div>
         <div className='logo'><img src={Redux} alt="redux" /></div>
         <div className='logo'><img src={Next} alt="next" /></div>
         <div className='logo'><img src={Framer} alt="framer motion" /></div>
         <div className='logo'><img src={Ts} alt="type scrpit" /></div>
         <div className='logo'><img src={Git} alt="git" /></div>
         <div className='logo'><img src={Java} alt="java" /></div>
         <div className='logo'><img src={MySql} alt="mysql" /></div>

         </div>
    </SkillsStyle>
  )
}



const SkillsStyle=styled.div`
height: auto;
width: 100%;
padding-bottom: 5rem;



.title{
  text-align: center;
    border: 1px solid black;
    width: 80%;
    margin: 40px auto 0 auto;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 4px;
    box-shadow: 2px 4px 18px -3px rgba(0,0,0,0.75);
-webkit-box-shadow: 2px 4px 18px -3px rgba(0,0,0,0.75);
-moz-box-shadow: 2px 4px 18px -3px rgba(0,0,0,0.75);

  h1{
    
    text-align: center;
    }

}

.logo{
  border: 2px solid black;
  padding: 2.5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;}
.logo-con{
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


@media screen and  (max-width:1200px) {

  .logo-con{
  
  grid-template-columns: repeat(auto-fill,minmax(230px,1fr)) ;
  
}
  
}


@media screen and (max-width:768px) {

  .title{
      font-size: .8rem;
    }

  

  .logo{
    padding: 1rem;
  }

  .logo-con{
  
  grid-template-columns: repeat(auto-fill,minmax(200px,1fr)) ;
  
}
 
}



@media screen and (max-width:400px) {

  .title{
      font-size: .6rem;
    }

  
  .logo{
    padding: .3rem;
  }

  .logo-con{
  
  grid-template-columns: repeat(auto-fill,minmax(150px,1fr)) ;
  
}
  
}




`

export default Skills