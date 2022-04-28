import React from "react";
import styled from "styled-components";
import ProjectsCard from "../Components/ProjectsCard";
import SkillsImages from "../Components/SkillsImages";

const Projects = () => {
  return (
    <ProjectsStyle>

      <div id="Projects" className="title">
        <h1>Projects</h1>
      </div>

      <ProjectsCard />

    </ProjectsStyle>
  );
};

const ProjectsStyle = styled.div`

  width: 100%;
  height: 100vh;

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
    margin: 0;
    padding: .7rem;
    }

    .card{
      height: 200px;
      width: 200px;
    }



}

`

export default Projects;
