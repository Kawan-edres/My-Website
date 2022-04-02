import React from 'react'
import styled from 'styled-components';
import kawan from '../Assets/Images/kk.png'
import {useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {ReactComponent as In} from '../Assets/Contact/in.svg'
import {ReactComponent as Facebook} from '../Assets/Contact/facebook.svg'
import {ReactComponent as Github} from '../Assets/Contact/github.svg'
import {ReactComponent as Twitter} from '../Assets/Contact/twitter.svg'



const Intro = () => {

  const buttonAbout=useNavigate();
  
  
  return (
    <IntroStyle>
      <div className="home-content">
      

        <motion.div className="content">
          <p className='hi'>Hi There.</p>
          <h1><span>I'm Kawan Idrees</span><br className='br' /> A Front-End Developer.</h1>
          <p className='info'>I'm a front-end developer and software engineer,<br/> focused on web developmnet and I'm so extied <br />
          with creating excelent and professional websites <br /> and improving it for modern life. 
           </p>

            {/* contact icons */}
            <div className='contact-icons'>
          <a className='c-icon' href="https://linkedin.com/in/kawan-edres-babb66216" target="_blank" rel="noopener noreferrer"><In /></a>
          <a className='c-icon' href="https://www.facebook.com/profile.php?id=100011465739289" target="_blank" rel="noopener noreferrer"><Facebook /></a>
          <a className='c-icon' href="https://github.com/Kawan-edres" target="_blank" rel="noopener noreferrer"> <Github /></a>
          <a className='c-icon' style={{margin:"0px 0px 0px 8px"}} href="https://twitter.com/Kawan45915051" target="_blank" rel="noopener noreferrer"> <Twitter /></a>
           </div>

           {/* button */}
           <motion.button onClick={()=>buttonAbout("/about")}  drag dragConstraints={{left: 0,top:0,right:0,bottom:0}}>More About Me</motion.button>

          
           


        </motion.div>

        {/* middle */}
       <div className='year'>

         <div style={{cursor:"pointer"}} onClick={()=>buttonAbout('/about')} className='experience'>
           <h1>1</h1>
           <h6>Years of <br />Experience</h6>
         </div>

         <div style={{cursor:'pointer'}} onClick={()=>buttonAbout('/projects')} className='projects'>
           <h1>17</h1>
           <h6>Completed<br />Projects</h6>
         </div>
         
       </div>

        {/* img */}
      <div className="home-img">
          
          <img src={kawan} alt="Kawan's Photo" />

        </div>
        
      </div>





     
     

      
    </IntroStyle>
   
  )
}


const IntroStyle=styled.div`
height: fit-content;
width: 100vw;
background-color:white;
padding: 200px 0px 60px 0px;
overflow-x: hidden;

.home-content{
  padding: 2rem;
  border-radius: 5px;

  width: 80%;
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  position: relative;
  border: 2px solid white;
  box-shadow: 40px 40px 20px  #ECECEC,-0.1em 0px .2em #ECECEC ;
  
}
.content{
  margin-top: 20px;
   font-family: 'Roboto', sans-serif;
   padding-left: 1rem;
  }
 .hi{
  font-size: 2.1rem;
  
  
}
.content h1{
  font-size: 3.3rem;
  margin: 0;
  line-height: 1.5;
  
  
}

.content span{
  color: #e63946;
  text-shadow: 1px 1px 1px black;
} 
.info{
  font-size: 1.6rem; 
  overflow-wrap: break-word;
 
}

.contact-icons{
  display: flex;
  align-items: center;
  column-gap: 25px;
  transition: all 0.3 ease-in;
  width: 100%;
}
.c-icon:hover{
  transform: scale(1.1);
  
  
}
.content button{
  margin-top: 20px;
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  background-color: white;
  color: black;
  border: 2px solid #e63946 ;
  font-size: 1.5rem;
  padding: 1rem;
  border-radius: 5px;
}

.content button:hover   { 
  a{
    color: white;

  }
  color: white;
  background-color: #e63946;
  font: bolder;
}


 img{
  width: 100%;
  height: 60vh;
  object-fit: contain;
  border-radius: 50%;
  box-shadow: 0px 60px 40px -7px rgba(192, 202, 206,0.5) ;
  float:right ;
}

.year{
  display: flex;  
  position: absolute;
  column-gap: 6em;
  left: 35%;
  top: 75%;
}
.experience,
.projects{
  display: flex;
  align-items: center;

  h1{
    font-size: 3.5rem;
    color: #e63946;
    margin-right:3px;
    text-shadow: 3px 3px 4px  black;
  }
 
  h6{
    font-size: 1rem;
    font: bold;
    align-self: flex-end;

  }
}

@media screen and (max-width:1400px) {

  .home-content{
    /* margin: 0 200px; */
  }
  .content{
    margin-top: 0px;

  }
  .hi{
    font-size: 2rem;
    margin:20px 0 0 0;
  }
  .content h1{
    font-size: 2.8rem;
  }
  .info{
    font-size: 1.3rem;
  }
    
  img{
    box-shadow:none;
    height: 50vh;
  }
  
}

@media (max-width:1200px) and (min-width: 1024px) {


  .content{
    margin-top: 40px;
  }

  .hi{
    font-size: 1.4rem;
  }
  .content h1{
    font-size: 2.3rem;
  }
  .info{
    font-size: 1.2rem;
  }
  img{
    width: 90%;
  }
  .content button{
    padding: 1rem;
    font-size: 1.3rem;

  }
  
  

  
  
}


@media screen and (max-width:1024px) {
  padding: 100px 0px 100px 0px;

 
  .home-content{
    margin: 0px auto ;
    flex-direction: column-reverse;
    padding-bottom: 8rem; 

  }
  .contact-icons{
    display: flex ;
    justify-content: center;
   
  }
  .content{
    text-align: center;
    margin-top: 40px;
  }
  
  

  .content button{
    padding: 1rem;
    font-size: 1.3rem;
  }

  img{
   
    height: 45vh;
  }

  .year{
    width: 100%;
    left: 0;
    justify-content: center;
    top:85%;
  }
  
}

@media screen and (max-width:768px) {
  .home-content{
     box-shadow: none;

  }
  .content{
    padding-left: 0;
  }

  .content button{
    font-size: 1rem;
    padding: .8rem;
  }
  .home-img{
   
    width:100%;


  }
  img{
    height: 300px;
    

  }
  
  
}

@media  (max-width:633px) {
  .home-content{
  }

  
 
  .hi{
    font-size: 1rem;
    margin: 0;
  }
  .content h1{
    font-size: 2.2rem;
  }
  .info{
    font-size: 1rem;
  }
  .contact-icons{
    column-gap:10px;
  }
  .content button{
    font-size: .8rem;
    padding: .6rem;
  }

}

 
  

@media  (max-width:500px) {
 
  .content{
    padding-left: 0;
  }
  .content h1{
    font-size: 1.8rem;
  }
  .info{
    font-size: 0.8rem;
  }
  .year{
    left: 0;
   justify-content: center;
  
    column-gap: 1.5em;
    
  }
  .projects,
  .experience{
   
    
    h1{
      font-size: 2.5rem;
    }
  
}
}

@media  (max-width:408px) {
  

  .year{
    margin-top: 10px;
    column-gap: 1em;
      
    
    }
    .projects,
  .experience{
    h1{
      font-size: 2rem;
    }
    p{
      font-size: 0.5rem;
    }
 
    
}}






`





  
  
  


export default Intro