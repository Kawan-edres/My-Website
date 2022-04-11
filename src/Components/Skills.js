import React from 'react'
import styled from 'styled-components'
import SkillsImages from './SkillsImages'

const Skills = () => {
  return (
    <SkillsStyle id='Skills'> 
    <div className='title'>
        
         <h1>My Skills</h1>
         
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
    </SkillsStyle>
  )
}



const SkillsStyle=styled.div`
height: auto;
width: 100%;
padding-bottom: 5rem;
margin-top: 5rem;




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
    }

}

.logo{
  border: 2px solid black;
  padding: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: transform .2s ease;
}
.logo:hover{
  transform:matrix( 1.2, 0, 0, 1.2, 0, 0);
}
.logo-con{

  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(300px,1fr)) ;
  justify-items: center;
  align-items: center;
  grid-row-gap: 2rem;
  grid-column-gap: 1rem;
  margin-top: 100px;
  padding: 15px;


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