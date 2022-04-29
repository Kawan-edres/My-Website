import React from "react";
import styled from "styled-components";
import ProjectsCard from "../Components/ProjectsCard";

// card images
import Movie from "../Assets/Projects/movie.jpg";
import Typing from "../Assets/Projects/typing.jpg";
import Todo from "../Assets/Projects/Todo.jpg";
import Portfolio from "../Assets/Projects/portfolio.png";
import Tic from "../Assets/Projects/tic.jpg";
import Drum1 from "../Assets/Projects/drum1.jpg";
import Drum2 from "../Assets/Projects/drum2.png";
import Wall from "../Assets/Projects/wall.png";
import Instgram from "../Assets/Projects/instagram.webp";

const Projects = () => {
  return (
    <ProjectsStyle>
      <div id="Projects" className="title">
        <h1>Projects</h1>
      </div>

      <div className="cards-container">
        <ProjectsCard
          img={Movie }
          title="Movie Api "
          tolls="Html, Css, Framer, JS, React ,Api"
          link="https://kawan-edres.github.io/Movie-WebSite/"
        />

        <ProjectsCard
          img={Instgram}
          title="Instagram"
          tolls="Html, Css, Tailwind CSS ,JS , React"
          link="https://kawan-edres.github.io/instgram-clone/"
        />

        <ProjectsCard
          img={Typing}
          title="Typing"
          tolls="Html, Css, Boolma Css, JS, React"
          link="https://kawan-edres.github.io/Typing-Test-Accuracy/"
        />

        <ProjectsCard
          img={Todo}
          title="To Do "
          tolls="Html, Css, JS, React"
          link="https://kawan-edres.github.io/My-Todo/"
        />

        <ProjectsCard
          img={Tic}
          title="Tic Tac Toe"
          tolls="Html, Css, JS, React"
          link="https://kawan-edres.github.io/Tic-Tac-Toe-Game/"
        />
        <ProjectsCard
          img={Portfolio}
          title="Portfolio"
          tolls="Html, Css, Framer, JS, React"
          link="https://kawan-edres.github.io/Capture-Portofolio/"
        />

        <ProjectsCard
          img={Drum1}
          title="Drum Music App"
          tolls="Html, Css, JS, React"
          link="https://kawan-edres.github.io/Tic-Tac-Toe-Game/"
        />
        <ProjectsCard
          img={Wall}
          title="Wall Game"
          tolls="Html, Css, JS, React"
          link="https://kawan-edres.github.io/Tic-Tac-Toe-Game/"
        />
        <ProjectsCard
          img={Drum2}
          title="Drum Music App"
          tolls="Html, Css, JS, React"
          link="https://kawan-edres.github.io/Tic-Tac-Toe-Game/"
        />
      </div>

      <hr />
    </ProjectsStyle>
  );
};

const ProjectsStyle = styled.div`
  width: 100%;
  height: 100vh;  

  .title {
    text-align: center;
    border: 1px solid black;
    border-radius: 4px;
    width: 80%;
    margin: 40px auto 0 auto;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 4px;
    box-shadow: 2px 4px 18px -3px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 2px 4px 18px -3px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px 4px 18px -3px rgba(0, 0, 0, 0.75);

    h1 {
      text-align: center;
      margin: 0;
      padding: 0.7rem;
    }
  }

  .cards-container {
    width: 80%;
    height: auto;
    margin: 100px auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
    grid-row-gap: 1.5rem;
    grid-column-gap: 1.7rem;

    justify-items: center;
  }

  

  @media screen and (max-width: 1400px) {
    .cards-container {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }

    @media screen and (max-width: 800px) {
      .cards-container {
        grid-row-gap: 3rem;
        grid-column-gap: 1.7rem;
      }
    }
  }
`;

export default Projects;
