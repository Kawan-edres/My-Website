import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { useState } from 'react'
import { motion,useAnimation } from 'framer-motion'
import { navAnimation } from '../Animtion'
const Navbar = () => {

 //Animate Hook
  const control=useAnimation();

  // use state hook for handling a navbar humburger
  const [navActive,setNavActive]=useState(false);
  const [mobileNav,setMobileNav]=useState(false);
  return (
    
    <Navigation >
    <div onClick={()=>setNavActive(false)} className={`${navActive?"overlay":""}`}></div>
 
   <div className='nav-container'>
    <h1 id='logo'><a href='#Home'>Kawan</a></h1>



    <ul className={`${navActive?"nav-active":""}`}>
   
        <li  onClick={()=>setNavActive(!navActive)}  ><a  href='#Home'>Home</a></li>
        <li  onClick={()=>setNavActive(!navActive)}  ><a  href='#Skills'>Skills</a></li>
        <li  onClick={()=>setNavActive(!navActive)}  ><a href='#Projects'  >Projects</a></li>
        <li  onClick={()=>setNavActive(!navActive)}  ><a >Contact</a></li>
    </ul>

    
    {/* humburger */}
    <div className={`burger ${navActive?"style":""}`}   onClick={()=>setNavActive(!navActive)}>
      <div className='line1'></div>
      <div className='line2'></div>
      <div className='line3'></div>
      
    </div>

    </div>




</Navigation>
)
}

const Navigation= styled.div`   
height: 5vh;  
width: 100%;
display: flex;
color: black;
font-family: 'Roboto', sans-serif;
justify-content: center;
align-items: center;
padding: 1rem 0rem;
margin: auto; //hich nakat
position: fixed;
top: 0;
z-index: 100;
background-color: white;
background-color: #e63946;
.nav-container{
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
}

a{
text-decoration: none;
color: white;
letter-spacing: 2px;
transition: all 0.3 ease-in-out;

}
#logo{
font-size: 1.5rem;
color: white;
cursor: pointer;
}
#logo a:hover{
  color: black;
}



ul{
display: flex;
justify-content: space-around;
align-items: center;
padding: 0;
width: 50%;

li{
 
list-style: none;
padding-left:1rem;
font-size: 1.3rem;
font: bold;


}


li:hover a{
  color: black;

}



}

.burger{
  display: none;
}
.burger div{
  width: 25px;
  height: 3px;
  background-color: black;
  margin: 5px;
  transition: all 0.5 ease;
  
}

@media screen and (max-width:1400px) {
  li a{
    font-size: 1.2rem;
  }
}

@media screen and (max-width:1200px) {
  ul{
    width: 70%;
  }


}

@media screen and (max-width:768px) {

  body{
    overflow-x: hidden;
  }
 
  #logo{
    margin-left: 20px;
  }
 
  .nav-container{
    /* background-color: blue  ; */
    width: 95%;
    justify-content: space-between;
    margin-top: 0;
  }

  .overlay{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 50%;
    background-color: rgba(0,0,0,.01);
  }


  ul{
    position: fixed;
    width:50%;
    right: 0;
    top: 0;
    height: 100%;
    background-color: #e63946;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    transform: translateX(100%);
    transition: transform  0.5s ease-in;
    margin-top: 0;
    
    

    li{
      opacity: 1;
      transition: transform 0.1s ease-in;
      font-size: 1.5rem;
      
     
    }
    li a{
      color: white;
    }
    li a:hover{
      color: white;
     
    }
    li:hover{
      transform: scale(1.5);
      color: white;

    }

  }
 
  .burger{
    display: block;
    cursor: pointer;
    z-index: 2;
    transition: transform  2s ease-in;
  
    

  }
  
  .burger div{
    background-color: white;
  }
  

  .style :nth-child(1){
    transform: rotate(-45deg) translate(-5px,6px);
    transition: transform  0.2s ease-in;
    background-color: white;

  }
  .style :nth-child(2){
    
    opacity: 0;
    transition: transform  0.1s ease-in;
    
  }
  .style :nth-child(3){
    transform: rotate(45deg) translate(-5px,-6px);
    transition: transform  0.2s ease-in;
    background-color:white
   

  }
  .nav-active{
    transform: translateX(0%);
   

  } 



}

@media screen and (max-width:500px) {
  ul{
    width: 100%;

  }
}
`
   
  


export default Navbar