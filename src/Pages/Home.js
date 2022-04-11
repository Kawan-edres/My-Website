import Intro from "../Components/Intro"
import styled from "styled-components"
import Footer from "../Components/Footer";
import Skills from "../Components/Skills"
import Skills2 from "../Components/Skills2";


const Home = () => {
  return (
   <HomeStyle>
    <Intro />
    <Skills />
    <Skills2 />
    <Footer />
    </HomeStyle>
  );
}





const HomeStyle=styled.div`
height: auto;
overflow-x: hidden;

`





  
  
  


export default Home