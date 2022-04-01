import React from "react";
import styled from "styled-components";
import Cv from "../Assets/Cv/cv.pdf";

const PersonalDetails = () => {
  return (
    <DetaisStyle>
      <div className="title">
        <h1>About ME</h1>
      </div>

      {/* 1 */}
      <div className="about-container">
       

        {/* 2 */}
        <div className="about-details">
          <h1>Personal Details</h1>
          <div className="ul-con">
            <ul>
              <li>First Name : Kawan</li>
              <li>Last Name : Idrees</li>
              <li>Birth : Aug16,2000</li>
            </ul>
            <ul className="second-ul">
              <li>Language : KRD,ENG</li>
              <li>Adress : Erbil,Iraq</li>
              <li>Freelance : Available</li>
            </ul>
          </div>

          {/* cv */}
          <div className="cv">
            <button className="cv-button">
              <a className="download-cv" href={Cv} download>
                DOWNLOAD CV
              </a>
            </button>
          </div>
        </div>

        {/* 3  */}

         <div className="experince">
          <div className="year">
            <h3>1 Year <br /> Experince</h3>
          </div>
          <div className="proj">
            <h3>17 Completed <br /> Projects</h3>
          </div>
        </div>
      </div>

     
     
    </DetaisStyle>
    

  );
};

const DetaisStyle = styled.div`
  background-color: white;
  overflow: hidden;
  width: 100%;
  font-family: "Roboto", sans-serif;
  overflow-x: hidden;
  height: 80vh;
  

  .title {
    text-align: center;
    border: 2px solid black;
    width: 80%;
    margin: 40px auto 0 auto;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 4px;
  }

  .about-container {
    margin: 40px auto 0 auto;
    width: 80%;
    display: flex;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
        justify-content: center ;
  }
  
  .about-details {
    padding: 10px;
    width: 60%;
    h1 {
      margin-left: 30px;
    }
  }

  ul{
    padding:0;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    width: 50%; 

  }
  .ul-con {
    display: flex;
    li {
      list-style: none;
      padding: 2rem;
      font-size: 1.2rem;
    }
  }
  .second-ul{
    /* margin-left: 4rem; */
  }
  .cv{
   
    padding: 1rem;
    .cv-button{
    
      text-align: center;
      text-decoration: none;
      display: inline-block;
      background-color: white;
      color: black;
      border: 2px solid #e63946 !important ;
      font-size: 1rem;
      padding: .8rem;
      border-radius: 5px;

      a{
        text-decoration: none;  
        color: black;
        font-family: 'Roboto',sans-serif;
        letter-spacing: 1px;
        
      }
      border: none;
    }
  }

  .cv-button:hover{
    a{
    color: white;

  }
  color: white;
  background-color: #e63946;
  font: bolder;
  }

  .experince {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .proj,
    .year {
      border: 2px solid #e63946;
      color: black;
      font-size: 1.3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 35%;
      margin: 2.3rem;
      transition: all .3s ease;
    }
  }

   .year:hover{
    background-color: #e63946;
    color: white;
  }
  .proj:hover{
    background-color: #e63946;
    color: white;

  }


  hr{
    margin-top: 1rem ;
    width: 10%;
    margin: 0 auto;

    border-top: 10px solid red;
  }

  @media (max-width: 1024px) {

    .about-container{
      flex-direction: column;
      text-align: center;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default PersonalDetails;
