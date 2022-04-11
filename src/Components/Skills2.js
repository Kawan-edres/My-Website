import React, { useState,useRef,useEffect } from 'react'
import SkillsImages from './SkillsImages'
import { motion } from 'framer-motion'
import styled from 'styled-components'
const Skills = () => {

  const [width,setWidth]=useState(0);
  const carousel=useRef();

  useEffect(()=>{
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  },[])
  return (


    <StyledSkills >
    <h6>Drag left to see all skills </h6>
         <motion.div ref={carousel} className='carousel' whileTap={{cursor:"grabbing"}}>

         <motion.div drag='x' dragConstraints={{right:0,left:-width}} className='inner-carousel'>
    
           {
              SkillsImages.map((image, index) => {
                return (
                   <motion.div className="item" key={index}>
                   <img  src={image} alt="html" />

                   </motion.div>                  
                  )
              })

           }

           </motion.div>

         </motion.div>

         </StyledSkills>
  
  )
}

const StyledSkills = styled.div`
h6{
  font-size:1rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  color: #e63946;
}

.item{
 
  min-width: 10rem;
  min-height: 10rem;
  padding: 20px;
  margin: 10px;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 5px #ECECEC;
  background-size: cover;
  object-fit: cover;

}

.item img{

  width: 100%;
  height: 100%;
  pointer-events: none;
}

.inner-carousel{
  display: flex;





}

.carousel{
  cursor:grab;
  overflow: hidden;


}

@media screen and (min-width: 768px) {
  visibility: hidden;
  display: none;
  opacity: 0;
  
}
@media screen and (max-width: 768px) {
  
  .item{
    min-height: 5rem;
    min-width: 5rem;
  }
  
}

@media screen and (max-width: 470px) {
  
  .item{
    min-height: 3rem;
    min-width: 3rem;
  }
  
}
  
`

export default Skills 