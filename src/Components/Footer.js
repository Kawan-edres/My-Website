import React from 'react'
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyle>

         <p>© Kawan Idrees. A Front-End Developer</p>
    </FooterStyle>
  )
}

const FooterStyle = styled.div`

p{
    font-family: 'Merriweather', serif;
    text-align: center;
    line-height: 2;
    font-weight:400;
}


`

export default Footer