import React from 'react'
import styled from 'styled-components'
import SkillsImages from './SkillsImages'

// animations
import {motion} from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const Skills = () => {

  const[ref,inView]=useInView({
    threshold:0.3,
   
  });
  const animation=useAnimation();
 
    //intro animation
   
    if(inView){
      animation.start({
        x:0,
        opacity: 1,
        transition: {ease:"easeOut",type:"spring", duration:.75},
      });     
    }

    if(!inView){
      animation.start({x:-800,opacity:0,transition: {ease:"easeOut", duration:.75}});
    }

  


  return (
    <SkillsStyle ref={ref}  > 
    <motion.div   animate={animation}>
    <div id='Skills' className='title'>
        
         <h1 id='Skills'>My Skills</h1>
         
    </div>
        
         <div className='logo-con'>
    
           {
              SkillsImages.map((image, index) => {
                return (
                   <div className="logo" key={index}>
                   <img  src={image} alt="html" />

                   </div>                  
                  )
              })

           }

         </div>

         </motion.div>
         <hr className='hr' />
    </SkillsStyle>
  )
}



const SkillsStyle=styled.div`
width: 100%;
padding-bottom: 5rem;

/* margin-top: 5rem; */




.title{
   text-align: center;
    border: 1px solid black;
    border-radius: 4px;

    width: 80%;
    margin: 40px auto 0 auto;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 4px;
    box-shadow: 2px 4px 18px -3px rgba(0,0,0,0.75);
-webkit-box-shadow: 2px 4px 18px -3px rgba(0,0,0,0.75);
-moz-box-shadow: 2px 4px 18px -3px rgba(0,0,0,0.75);

  h1{
    
    text-align: center;
    margin: 0;
    padding: .7rem;
    }

}

.logo{
  width: 50%;
  border: 2px solid black;
  padding: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: transform .2s ease;
}
.logo:hover{
  transform:matrix( 1.1, 0, 0, 1.1, 0, 0);
}
.logo-con{

  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(270px,1fr)) ;
  justify-items: center;
  align-items: center;
  grid-row-gap: 2rem;
  margin-top: 100px;
  padding: 15px;


}
img{
  width: 100%;
  object-fit: cover;
}

.hr{

  margin-top: 200px;
}


@media screen and  (max-width:1200px) {

  .logo-con{
  
  grid-template-columns: repeat(auto-fill,minmax(230px,1fr)) ;
  
}
  
}


@media screen and (max-width:768px) {

  .title{
      display: none;
    }

    .hr{
      display: none;
    }
  

  .logo{
    padding: 1rem;
  }

  .logo-con{
    display: none;
    opacity: 0;
    visibility: hidden;
  
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