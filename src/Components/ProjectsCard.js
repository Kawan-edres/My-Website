import React from 'react'
import styled from 'styled-components'





const ProjectsCard = ({img ,title,tolls,link}) => {
  return (

    
      <Card >
        <div className="ui-card">
        <img src={img} alt="" />
          <div className="des">
            <h3>{title}</h3>
            <p>
              {tolls}
            </p>
            <a href={link} target="_blank">See Project</a>
          </div>
        </div>
      </Card>
  )
}



const Card= styled.div`



  .ui-card {
    width: 325px;
    height: 450px;
    background: radial-gradient(#111 50%, #000 100%);
    overflow: hidden;
    position: relative;
    border-radius: 10px;

    box-shadow: 2px 4px 18px -3px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 2px 4px 18px -3px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 4px 18px -3px rgba(0, 0, 0, 0.75);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  .ui-card img {
    transform: scale(1.3);
    transition: all 0.3s ease-out;
  }

  .ui-card:hover img {
    transform: scale(1.1) translateY(-20px);
    opacity: 0.3;
  }

  .des {
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 1rem;
    margin: 0 auto;
    color: #fff;
    font-size: 18px;
    width: 100%;
  }

  .des h3 {
    font-size: 32px;
    font-weight: 700;
    margin: 0 0 20px;
    transform: translateY(30px);
    opacity: 0;
    transition: all 0.3s ease-out;
  }
  .des p {
    transform: translateY(30px);
    opacity: 0;
    transition: all 0.3s ease-out 0.2s;
  }

  .des a {
    color: #fff;
    background: #34aff3;
    display: inline-block;
    padding: 10px 25px;
    text-decoration: none;
    border-radius: 5px;
    transform: translateY(30px);
    opacity: 0;
    transition: all 0.3s ease-out 0.4s;
  }

  .des a:hover {
    background-color: #0e6290;
  }

  .ui-card:hover .des {
    h3,
    a,
    p {
      opacity: 1;
      transform: translateY(0px);
    }

  }


  
  @media screen and (max-width: 500px) {

    .ui-card {
    width: 250px;
    height: 350px;
    }
    
}


`
export default ProjectsCard