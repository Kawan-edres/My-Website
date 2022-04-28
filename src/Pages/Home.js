import Intro from "../Components/Intro"
import styled from "styled-components"
import Skills from "../Components/Skills"
import Skills2 from "../Components/Skills2";


const Home = () => {
  return (
   <HomeStyle>
    <Intro />
    <Skills />
    <Skills2 />
    </HomeStyle>
  );
}





const HomeStyle=styled.div`
height: auto;
overflow-x: hidden;

`





  
  
  


export default Home