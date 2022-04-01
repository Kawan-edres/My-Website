import React from "react";
import styled from "styled-components";
import Cv from "../Assets/Cv/cv.pdf";

const PersonalDetails = () => {
  return (
    <div>
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
              <li>Adress : Erbil,Iraq</li>
            </ul>
            <ul className="second-ul">
              <li>Language : KRD,ENG</li>
              <li>Phone : +9647503982829</li>
              <li>Email: kawanedres211 <br />@gmail.com</li>
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
     
      <hr />

     
     
    </DetaisStyle>


    </div>
    

  );
};


const DetaisStyle = styled.div`
  background-color: white;
  width: 100%;
  font-family: "Roboto", sans-serif;
  overflow-x: hidden;
  overflow-y: visible  ;
  height: auto;

  

  .title {
    text-align: center;
    border: 1px solid black;
    width: 80%;
    margin: 40px auto 0 auto;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 4px;
    box-shadow: 2px 4px 18px -3px rgba(0,0,0,0.75);
-webkit-box-shadow: 2px 4px 18px -3px rgba(0,0,0,0.75);
-moz-box-shadow: 2px 4px 18px -3px rgba(0,0,0,0.75);
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
  }
    .proj,
    .year {
      text-align: center;
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

   .year:hover{
    background-color: #e63946;
    color: white;
  }
  .proj:hover{
    background-color: #e63946;
    color: white;

  }
  hr{
    width: 40%;
    border-top: solid grey 2px;
    border-bottom:  none;
    margin: 100px auto ;

  }

@media (max-width:1400px) {
  .experince{
    width: 35%;
  }
  .year,.proj{
    height: 30%;
    font-size: 1.1rem;
    margin: 1rem !important;

  }
  
}
 

  @media (max-width: 1200px) {

    
      margin: 20px auto 0 auto;
    .year,.proj{
      font-size: 1rem;
      height: 25%;
      width: 75%;

    
    }

    .second-ul li{
      padding-left: 10px;
    }
  }


  @media (max-width: 1024px) {

    .ul-con li{
      padding: 1.5rem;
      font-size: 1rem;
    }
    .year,.proj{
      height:23%;
      margin: .5rem !important;

    }
    .year h3,.experince h3{
      font-size: 1rem;
    
    }

  }

  @media (max-width: 768px) {

    .title{
      font-size: .8rem;
    }
    .about-container{
      flex-direction: column;

    }
    .about-details{
      width: 100%;
      padding: 0;

      h1{
        font-size:1.4rem;
        letter-spacing: 2px;
      }

    }

    .ul-con li{
      font-size: .7rem;
    }
    .cv{
      padding: 0;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .cv .cv-button{
      margin-top: 30px;
      padding: 0.5rem;
    }

    .experince{
      margin-top: 40px;
      width: 100%;
      flex-direction: row;

    }

    hr{
    
    margin: 100px auto 20px auto ;
    
  }
    



  }

  @media (max-width: 420px) {
  .title{
    font-size: .6rem;
    margin-top: 20px;
  }

  .about-details{
    h1{
      font-size:1.2rem;

    }
  }

  .about-container{
    margin: 20px 0 0 0;
    width: 100%;
  }

  .ul-con li{
    padding: 1rem;
  }

  .year,.proj{
    width: 40%;
   
    }
  





  }


`;



export default PersonalDetails;
