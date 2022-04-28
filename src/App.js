import { Routes,Route,Navigate} from 'react-router-dom';
import styled from 'styled-components';




import Home from "./Pages/Home"
import About from './Pages/About';
import Projects from "./Pages/Projects"
import Contact from "./Pages/Contact"
import Navbar from './Components/Navbar';
import ScrollTop from './Components/ScrollTop';
import Footer from "./Components/Footer";




function App() {

  
  return (
    <Ap>
    <ScrollTop />
    {/* components */}
    <Navbar />
    


    <main>
    <Home />
    <Projects />
    <Footer />
   
       
        {/* <Routes>
        
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />

        </Routes> */}
     

      </main>
     



    
      
    </Ap>
  );
}

const Ap =styled.div`

height: auto;
width: 100vw;
overflow-x: hidden;

@media screen and (max-width:768px) {

  overflow-x: hidden;
}


`;

  export default App;

