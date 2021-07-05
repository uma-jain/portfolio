import React from 'react'
import './App.css';

import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/Projects";
import Technology from "./components/Technologies/Technologoies";
import About from "./components/About.js/About";
import Footer from "./components/Footer/Footer";


function App() {
  return (
   <div class="container-holder">
   <Header />
   
   <div className="component-container">
   
   <Intro></Intro>
   <div className="divider2"></div>
   <Projects></Projects>
   <div className="divider1"></div>
   <Technology></Technology>
   <div className="divider2"></div>
   <About></About>
   <Footer></Footer>
   </div>

   </div>
  );
}

export default App;
