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
    <div className='drag-con'>
    <h6>Drag Me  <div className="arrow-5"></div> </h6>
    </div>
   
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
         <hr className='hr' />

         </StyledSkills>
  
  )
}

const StyledSkills = styled.div`

.hr{
  margin-top: 200px;
}

.drag-con{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
h6{
  font-size:1rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  color: #e63946;


  

.arrow-5 {
  width:50px;
  height:30px;
  display: grid;
  overflow: hidden;
  margin: 0 auto;
}
.arrow-5:before,
.arrow-5:after {
  content: "";
  grid-area: 1/1;
  background: currentColor;
  clip-path: polygon(0 10px,calc(100% - 15px) 10px,calc(100% - 15px) 0,100% 50%,calc(100% - 15px) 100%,calc(100% - 15px) calc(100% - 10px),0 calc(100% - 10px));
  animation: a5 1s infinite;
  transform: translate(calc(0% + var(--s,0%)));
}

.arrow-5:after {
  --s:-100%;
}


@keyframes a5 {
  80%,100%{transform: translate(calc(100% + var(--s,0%)))}
}


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