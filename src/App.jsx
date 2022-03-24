import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Service from './components/services/Service';
import Portfolio from './components/portfolio/Portfolio';
// import Testimonial from './components/testimonials/Testimonial'
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import DarkMode from "./components/Darkmode/Darkmode.tsx";
// import Resume from './components/resume/Resume';



const App = () => {
  return (
  <>
    <DarkMode/>
    <Header/>
    <Nav/>
    <About/> 
     <Experience/>
     <Service/> 
    <Portfolio/>
    {/* <Testimonial/> */}
    {/* <Resume/> */}
    <Contact/>
  <Footer/>
  </>
  )
}

export default App  