import React from "react";
import styled from "styled-components";
import kawan from "../Assets/Images/kk.png";
import Cv from "../Assets/Cv/cv.pdf";

const PersonalDetails = () => {
  return (
    <DetaisStyle>
      <div className="title">
        <h1>About ME</h1>
      </div>

      {/* 1 */}
      <div className="about-container">
        <div className="about-img">
          <img src={kawan} alt="" />
        </div>

        {/* 2 */}
        <div className="about-details">
          <h1>Personal Details</h1>
          <div className="ul-con">
            <ul>
              <li>First Name : Kawan</li>
              <li>Last Name : Idrees</li>
              <li>Birth : Aug16,2000</li>
            </ul>
            <ul>
              <li>Language : KRD,ENG</li>
              <li>Adress : Erbil,Iraq</li>
              <li>Freelance : Available</li>
            </ul>
          </div>

          {/* cv */}
          <div className="cv">
            <button className="cv-button">
              <a className="download-cv" href={Cv} download>
                Download My Cv
              </a>
            </button>
          </div>
        </div>

        {/* 3 */}

        {/* <div className="experince">
          <div className="year">
            <h3>1Year Experince</h3>
          </div>
          <div className="proj">
            <h3>17Completed Projects</h3>
          </div>
        </div> */}
      </div>
    </DetaisStyle>
  );
};

const DetaisStyle = styled.div`
  background-color: white;
  overflow: hidden;
  width: 100%;
  font-family: "Roboto", sans-serif;

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
    border: 2px solid magenta;
    justify-content: center ;
  }
  .about-img {
    border: 2px green solid;
    width: 30%;
    img {
      width: 100%;
      height: 100%;
      background-size: cover;
      object-fit: cover;
    }
  }

  .about-details {
    border: 2px solid blue;
    padding: 10px;
    width: 70%;
    h1 {
      margin-left: 30px;
    }
  }

  .ul-con {
    display: flex;
    li {
      list-style: none;
      padding: 1rem;
      font-size: 1.2rem;
    }
  }
  .cv{
    /* justify-content: center; */
    /* background-color: wheat; */

    .cv-button{
      background-color: #e63946;
      padding: 15px;
      a{
        text-decoration: none;  
        border: none;
        outline: none;
        color: white;
      }
      border: none;
    }
  }

  .experince {
    border: 2px solid orange;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .proj,
    .year {
      border-bottom: 2px solid black;
      background-color: #cfe1b9;
      font-size: 1.2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 35%;
    }
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
