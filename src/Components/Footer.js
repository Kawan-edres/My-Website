import React from 'react'
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyle>

         <p>© Kawan Idrees. <br className='br'/> A Front-End Developer</p>
    </FooterStyle>
  )
}

const FooterStyle = styled.div`

br{
    display: none;
}
p{
    font-family: 'Merriweather', serif;
    text-align: center;
    line-height: 2;
    font-weight:400;
}

@media screen and (max-width:500px) {
   
    
    br{
        display: block;
    }
}


`

export default Footer