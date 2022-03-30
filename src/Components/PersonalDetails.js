import React from "react";
import styled from "styled-components";
import kawan from "../Assets/Images/about.png";

const PersonalDetails = () => {
  return (
    <DetaisStyle>
      
      

        <div className="about-img">
          <img src={kawan} alt="kawan's photo" />
        </div>

       
          <ul>
            <li>First Name : Kawan</li>
            <li>Last Name : Idrees</li>
            <li>Birth : Aug,16,2000</li>
            <li>Phone : +9647503982829</li>
            <li>Email : kawanedres211@gmail.com</li>
            <li>Language : KRD,ENG</li>
            <li>Adress : Erbil,Iraq</li>
          </ul>
        
      
    </DetaisStyle>
  );
};

const DetaisStyle = styled.div`
background-color:white;
overflow: hidden;
width: 20%;

.about-img{
    height: 40%;
}

img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-size: cover;

}

ul{
    height: 55%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    li{
        font-family: 'Roboto', sans-serif;  
        list-style: none;
        margin-bottom: 10px;
        font-size: 1.2rem;
    }

}


`;

export default PersonalDetails;
