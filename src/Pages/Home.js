import Intro from "../Components/Intro"
import styled from "styled-components"
import Footer from "../Components/Footer";


const Home = () => {
  return (
   <HomeStyle>
    <Intro />
    <Footer />
    </HomeStyle>
  );
}





const HomeStyle=styled.div`
height: auto;
overflow-x: hidden;

`





  
  
  


export default Home